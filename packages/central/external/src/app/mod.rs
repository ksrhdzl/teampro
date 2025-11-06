pub mod post;
pub mod user;

use crate::utilities::config::Config;
use axum::{Router, routing::get};
use general::modules::database::database::Database;
use post::module::PostModule;
use sqlx::PgPool;
use std::sync::Arc;
use user::module::UserModule;

#[derive(Clone)]
pub struct State {
    pub db: Arc<PgPool>,
    pub config: Config,
}

#[derive(Clone)]
pub struct App {
    pub state: State,
    pub user_module: UserModule,
    pub post_module: PostModule,
}

impl App {
    pub async fn new() -> anyhow::Result<Self> {
        tracing_subscriber::fmt()
            // .without_time()
            // .with_target(false)
            // .with_env_filter(EnvFilter::from_default_env())
            .init();

        let config = Config::load()?;

        let db = Arc::new(Database::connect(&config.database.url).await?);

        let state = State {
            db: db.clone(),
            config: config.clone(),
        };

        let user_module = UserModule::new(db.clone()).await?;
        let post_module = PostModule::new(db.clone(), user_module.service.clone()).await?;

        Ok(Self {
            state,
            user_module,
            post_module,
        })
    }

    pub async fn run(self) -> anyhow::Result<()> {
        let router: Router = Router::new()
            .nest("/posts", self.post_module.router(self.state.clone()))
            .nest("/users", self.user_module.router(self.state.clone()))
            .route("/health", get(|| async { "OK" }));

        let listener =
            tokio::net::TcpListener::bind((self.state.config.address, self.state.config.port))
                .await?;

        tracing::info!(
            "LISTENING - {}:{}",
            self.state.config.address,
            self.state.config.port
        );

        axum::serve(listener, router).await?;

        Ok(())
    }
}
