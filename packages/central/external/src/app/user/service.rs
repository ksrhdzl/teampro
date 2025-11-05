use super::repository::{Repository, User};
use general::utilities::{error::Error, result::Result};

pub struct UserService {
    repository: Repository,
}

impl UserService {
    pub fn new(repository: Repository) -> Self {
        Self { repository }
    }

    pub async fn list(&self) -> Result<Vec<User>> {
        self.repository.find_all().await
    }

    pub async fn create(&self) -> Result<User> {
        return Err(Error::BadRequest("name cannot be empty".into()));
    }
}
