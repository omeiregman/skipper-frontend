import * as actions from './actions'

export interface ExampleReducer {
  message: string
}

export const initialState: ExampleReducer = {
  message: 'test',
}

export const exampleReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: string }
) => {
  switch (type) {
    case actions.EXAMPLE_ACTION_TYPE_DONE:
      return {
        ...state,
        message: payload,
      }
    default: {
      return {
        ...state,
      }
    }
  }
}
