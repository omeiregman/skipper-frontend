import { combineReducers } from 'redux'
import { exampleReducer, ExampleReducer } from './example/reducer'

export interface AppState {
  example: ExampleReducer
}

const reducers = {
  example: exampleReducer,
}
export default combineReducers(reducers)
