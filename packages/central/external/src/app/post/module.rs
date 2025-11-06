use crate::app::{State, user::service::UserService};

use super::{controller::PostController, repository::Repository, service::PostService};
use axum::Router;
use std::sync::Arc;

#[derive(Clone)]
pub struct PostModule {
    pub service: Arc<PostService>,
    pub controller: Arc<PostController>,
}

impl PostModule {
    pub async fn new(
        pool: Arc<sqlx::PgPool>,
        user_service: Arc<UserService>,
    ) -> anyhow::Result<Self> {
        let repository = Repository::new(pool);
        let service = Arc::new(PostService::new(repository, user_service));
        let controller = Arc::new(PostController::new(service.clone()));

        Ok(Self {
            service,
            controller,
        })
    }

    pub fn router(&self, state: State) -> Router {
        self.controller.clone().router(state)
    }
}
