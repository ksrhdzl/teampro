use crate::app::State;
use std::sync::Arc;

pub type ControllerState<C> = (State, Arc<C>);
