use super::repository::{Post, Repository};
use crate::app::user::service::UserService;
use general::utilities::{error::Error, result::Result};
use std::sync::Arc;

pub struct PostService {
    repository: Repository,
    pub user_service: Arc<UserService>,
}

impl PostService {
    pub fn new(repository: Repository, user_service: Arc<UserService>) -> Self {
        Self {
            repository,
            user_service,
        }
    }

    pub async fn list(&self) -> Result<Vec<Post>> {
        self.repository.find_all().await
    }

    pub async fn create(&self) -> Result<Post> {
        return Err(Error::BadRequest("name cannot be empty".into()));
    }
}
