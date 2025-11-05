use anyhow::Result;
use lib::app::App;

#[tokio::main]
async fn main() -> Result<()> {
    let app = App::new().await?;
    app.run().await
}
