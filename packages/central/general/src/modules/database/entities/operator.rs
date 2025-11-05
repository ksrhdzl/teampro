// use chrono::{DateTime, Utc};
// use serde::{Deserialize, Serialize};
// use serde_json::{Map, Value};
// use sqlx::types::Json;
// use sqlx::{FromRow, Pool, Postgres};
// use uuid::Uuid;

// #[derive(Debug, Clone, Serialize, Deserialize, FromRow)]
// pub struct Operator {
//     pub id: Uuid,
//     pub metadata: Json<Value>,
//     pub created_at: DateTime<Utc>,
//     pub updated_at: DateTime<Utc>,
//     pub deleted_at: Option<DateTime<Utc>>,
// }

// impl Operator {
//     /// Creates a new operator with UUID v7 and default metadata
//     pub async fn create(pool: &Pool<Postgres>) -> Result<Self, sqlx::Error> {
//         let operator_id = Uuid::now_v7();
//         let default_metadata = Json(Value::Object(Map::new()));

//         sqlx::query_as!(
//             Operator,
//             r#"
//             INSERT INTO operator (id, metadata, created_at, updated_at)
//             VALUES ($1, $2, $3, $4)
//             RETURNING id, metadata, created_at, updated_at, deleted_at
//             "#,
//             operator_id,
//             default_metadata.0,
//             Utc::now(),
//             Utc::now()
//         )
//         .fetch_one(pool)
//         .await
//     }
// }
