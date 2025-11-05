// src/common/middleware.rs
use axum::{extract::Request, http::StatusCode, middleware::Next, response::Response};

// NestJS Middleware equivalent
pub async fn logging_middleware(request: Request, next: Next) -> Result<Response, StatusCode> {
    let method = request.method().clone();
    let uri = request.uri().clone();

    println!("→ {} {}", method, uri);

    let response = next.run(request).await;

    println!("← {}", response.status());
    Ok(response)
}

pub async fn cors_middleware(request: Request, next: Next) -> Response {
    let response = next.run(request).await;

    // Add CORS headers
    // In production, use tower-http::cors
    response
}
