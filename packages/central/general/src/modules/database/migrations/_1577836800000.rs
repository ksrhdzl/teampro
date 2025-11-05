use sqlx::Executor;

pub const NAME: &str = "1577836800000";

pub async fn up<'e, E: Executor<'e>>(ex: E) -> sqlx::Result<()> {
    ex.execute(
        r#"
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL
        )
    "#,
    )
    .await?;
    Ok(())
}

pub async fn down<'e, E: Executor<'e>>(ex: E) -> sqlx::Result<()> {
    ex.execute("DROP TABLE users").await?;
    Ok(())
}
