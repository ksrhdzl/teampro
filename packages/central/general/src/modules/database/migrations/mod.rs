use async_trait::async_trait;
use futures::future::BoxFuture;
use sqlx::{Executor, Pool, Postgres};

mod _1577836800000;
mod _1577836801000;

#[async_trait]
pub trait MigrationTrait {
    fn name(&self) -> &'static str;
    async fn up(&self, pool: &Pool<Postgres>) -> sqlx::Result<()>;
    async fn down(&self, pool: &Pool<Postgres>) -> sqlx::Result<()>;
}

pub struct Migration {
    pub name: &'static str,
    pub up_fn: for<'a> fn(&'a Pool<Postgres>) -> BoxFuture<'a, sqlx::Result<()>>,
    pub down_fn: for<'a> fn(&'a Pool<Postgres>) -> BoxFuture<'a, sqlx::Result<()>>,
}

macro_rules! register {
    ($mod:ident) => {
        Migration {
            name: $mod::NAME,
            up_fn: |pool| Box::pin($mod::up(pool)),
            down_fn: |pool| Box::pin($mod::down(pool)),
        }
    };
}

pub static MIGRATIONS: &[Migration] = &[register!(_1577836800000), register!(_1577836801000)];

pub async fn run(pool: &Pool<Postgres>) -> sqlx::Result<()> {
    pool.execute("CREATE TABLE IF NOT EXISTS migrations (name VARCHAR PRIMARY KEY)")
        .await?;

    for migration in MIGRATIONS {
        let applied: Option<bool> =
            sqlx::query_scalar("SELECT EXISTS(SELECT 1 FROM migrations WHERE name = $1)")
                .bind(migration.name)
                .fetch_one(pool)
                .await?;

        if applied != Some(true) {
            println!("⬆️  Running migration: {}", migration.name);
            (migration.up_fn)(pool).await?;
            sqlx::query("INSERT INTO migrations (name) VALUES ($1)")
                .bind(migration.name)
                .execute(pool)
                .await?;
        }
    }

    Ok(())
}

pub async fn revert(pool: &Pool<Postgres>) -> sqlx::Result<()> {
    let last =
        sqlx::query_scalar::<_, String>("SELECT name FROM migrations ORDER BY name DESC LIMIT 1")
            .fetch_optional(pool)
            .await?;

    if let Some(name) = last
        && let Some(mig) = MIGRATIONS.iter().find(|m| m.name == name)
    {
        println!("🔽 Reverting migration: {}", mig.name);
        (mig.down_fn)(pool).await?;
        sqlx::query("DELETE FROM migrations WHERE name = $1")
            .bind(mig.name)
            .execute(pool)
            .await?;
    }

    Ok(())
}
