import { IS_FETCHING, FETCH_OK, FETCH_ERROR } from "../action/types";

const INITIAL_STATE = {
  character: undefined,
  loading: false,
  error: '',
}

function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case IS_FETCHING:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_OK:
      return {
        character: {...action.character},
        loading: false,
        error: '',
      };
    case FETCH_ERROR:
      return {
        character: undefined,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export default reducer;