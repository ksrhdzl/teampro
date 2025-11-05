use crate::app::State;

use super::{controller::UserController, repository::Repository, service::UserService};
use axum::Router;
use std::sync::Arc;

#[derive(Clone)]
pub struct UserModule {
    pub service: Arc<UserService>,
    pub controller: Arc<UserController>,
}

impl UserModule {
    pub async fn new(pool: Arc<sqlx::PgPool>) -> anyhow::Result<Self> {
        let repository = Repository::new(pool);
        let service = Arc::new(UserService::new(repository));
        let controller = Arc::new(UserController::new(service.clone()));

        Ok(Self {
            service,
            controller,
        })
    }

    pub fn router(&self, state: State) -> Router {
        self.controller.clone().router(state)
    }
}
