use axum::{
    Json,
    http::StatusCode,
    response::{IntoResponse, Response},
};
use serde::Serialize;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum Error {
    #[error("Database error: {0}")]
    Database(#[from] sqlx::Error),

    #[error("Not found")]
    NotFound,

    #[error("Bad request: {0}")]
    BadRequest(String),

    #[error("Internal error: {0}")]
    Internal(String),
}

#[derive(Serialize)]
struct ErrorResponse {
    error: String,
}

impl IntoResponse for Error {
    fn into_response(self) -> Response {
        let (status, msg) = match &self {
            Error::Database(_) => (StatusCode::INTERNAL_SERVER_ERROR, self.to_string()),
            Error::NotFound => (StatusCode::NOT_FOUND, self.to_string()),
            Error::BadRequest(_) => (StatusCode::BAD_REQUEST, self.to_string()),
            Error::Internal(_) => (StatusCode::INTERNAL_SERVER_ERROR, self.to_string()),
        };

        let body = Json(ErrorResponse { error: msg });
        (status, body).into_response()
    }
}
