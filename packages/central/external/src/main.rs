use anyhow::Result;
use external::app::App;

#[tokio::main]
async fn main() -> Result<()> {
    let app = App::new().await?;
    app.run().await
}
