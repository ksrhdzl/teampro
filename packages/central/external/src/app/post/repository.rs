use general::utilities::result::Result;
use serde::{Deserialize, Serialize};
use sqlx::{FromRow, PgPool};
use std::sync::Arc;

#[derive(FromRow, Debug, Serialize, Deserialize, Clone)]
pub struct Post {
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

    pub async fn find_all(&self) -> Result<Vec<Post>> {
        let posts = sqlx::query_as::<_, Post>("SELECT id, name FROM posts")
            .fetch_all(&*self.pool)
            .await?;
        Ok(posts)
    }

    pub async fn create(&self, name: &str) -> Result<Post> {
        let post =
            sqlx::query_as::<_, Post>("INSERT INTO posts (name) VALUES ($1) RETURNING id, name")
                .bind(name)
                .fetch_one(&*self.pool)
                .await?;
        Ok(post)
    }
}
