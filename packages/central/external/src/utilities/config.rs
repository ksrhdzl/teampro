// src/config.rs
use super::environment::Environment;
use serde::Deserialize;
use std::net::IpAddr;

#[derive(Debug, Deserialize, Clone)]
pub struct DatabaseConfig {
    pub url: String,
    pub max_connections: u32,
}

#[derive(Debug, Deserialize, Clone)]
pub struct AuthConfig {
    pub jwt_secret: String,
    pub jwt_expiry: i64,
}

#[derive(Debug, Deserialize, Clone)]
pub struct Config {
    pub address: IpAddr,
    pub port: u16,
    pub database: DatabaseConfig,
    pub auth: AuthConfig,
}

impl Config {
    pub fn load() -> anyhow::Result<Self> {
        let env = Environment::get()?;

        Ok(Self {
            address: IpAddr::from([127, 0, 0, 1]),
            port: env.port,
            database: DatabaseConfig {
                url: env.database_url,
                max_connections: 10,
            },
            auth: AuthConfig {
                jwt_secret: "my-secret-key".to_string(),
                jwt_expiry: 3600,
            },
        })
    }
}
