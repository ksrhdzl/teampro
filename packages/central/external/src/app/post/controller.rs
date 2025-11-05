use super::{repository::Post, service::PostService};
use crate::{app::State as IState, types::ControllerState};
use axum::{
    Json, Router,
    extract::{Path, State},
    routing::{get, post},
};
use general::utilities::result::Result;
use std::sync::Arc;

#[derive(Clone)]
pub struct PostController {
    pub service: Arc<PostService>,
}

impl PostController {
    pub fn new(service: Arc<PostService>) -> Self {
        Self { service }
    }

    pub fn router(self: Arc<Self>, state: IState) -> Router {
        Router::new()
            .route("/", get(Self::list))
            .route("/{name}", post(Self::create))
            .with_state((state, self))
    }

    async fn list(
        State((_state, controller)): State<ControllerState<PostController>>,
    ) -> Result<Json<Vec<Post>>> {
        let posts = controller.service.list().await?;

        Ok(Json(posts))
    }

    async fn create(
        State((_state, controller)): State<ControllerState<PostController>>,
        Path(_name): Path<String>,
    ) -> Result<Json<Post>> {
        let post = controller.service.create().await?;
        Ok(Json(post))
    }
}
