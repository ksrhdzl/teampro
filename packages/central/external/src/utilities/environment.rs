use dotenvy::dotenv;
use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct Environment {
    pub database_url: String,
    pub port: u16,
}

impl Environment {
    pub fn get() -> anyhow::Result<Self> {
        dotenv().ok();

        Ok(Environment {
            database_url: std::env::var("DATABASE_URL")?,
            port: std::env::var("PORT")?.parse()?,
        })
    }
}
