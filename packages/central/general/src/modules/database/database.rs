use super::migrations;
use sqlx::{PgPool, postgres::PgPoolOptions};
pub struct Database;

impl Database {
    pub async fn connect(url: &str) -> anyhow::Result<PgPool> {
        let db = PgPoolOptions::new()
            .max_connections(10)
            .connect(url)
            .await
            .unwrap();

        println!("🚀 Database connected, running migrations...");
        migrations::run(&db).await?;
        println!("✅ Migrations completed successfully");
        Ok(db)
    }
}
