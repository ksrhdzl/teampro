use super::{repository::User, service::UserService};
use crate::{app::State as IState, types::ControllerState};
use axum::{
    Json, Router,
    extract::{Path, State},
    routing::{get, post},
};
use general::utilities::result::Result;
use std::sync::Arc;

#[derive(Clone)]
pub struct UserController {
    pub service: Arc<UserService>,
}

impl UserController {
    pub fn new(service: Arc<UserService>) -> Self {
        Self { service }
    }

    pub fn router(self: Arc<Self>, state: IState) -> Router {
        Router::new()
            .route("/", get(Self::list))
            .route("/{name}", post(Self::create))
            .with_state((state, self))
    }

    async fn list(
        State((_state, controller)): State<ControllerState<UserController>>,
    ) -> Result<Json<Vec<User>>> {
        let users = controller.service.list().await?;
        Ok(Json(users))
    }

    async fn create(
        State((_state, controller)): State<ControllerState<UserController>>,
        Path(_name): Path<String>,
    ) -> Result<Json<User>> {
        let user = controller.service.create().await?;
        Ok(Json(user))
    }
}
