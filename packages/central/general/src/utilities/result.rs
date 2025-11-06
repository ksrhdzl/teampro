use super::error::Error;

pub type Result<T> = anyhow::Result<T, Error>;
