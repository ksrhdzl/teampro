use general::utilities::result::Result;
use serde::{Deserialize, Serialize};
use sqlx::{FromRow, PgPool};
use std::sync::Arc;

#[derive(FromRow, Debug, Serialize, Deserialize, Clone)]
pub struct User {
    pub id: i32,
    pub name: String,
}

#[derive(Clone)]
pub struct Repository {
    pool: Arc<PgPool>,
}

impl Repository {
    pub fn new(pool: Arc<PgPool>) -> Self {
        Self { pool }
    }

    pub async fn find_all(&self) -> Result<Vec<User>> {
        let users = sqlx::query_as::<_, User>("SELECT id, name FROM users")
            .fetch_all(&*self.pool)
            .await?;
        Ok(users)
    }

    pub async fn create(&self, name: &str) -> Result<User> {
        let user =
            sqlx::query_as::<_, User>("INSERT INTO users (name) VALUES ($1) RETURNING id, name")
                .bind(name)
                .fetch_one(&*self.pool)
                .await?;
        Ok(user)
    }
}
