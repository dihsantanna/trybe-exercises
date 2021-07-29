import { IS_FETCHING, FETCH_OK, FETCH_ERROR } from "../action";

const INITIAL_STATE = {
  character: {},
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
        character: {},
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export default reducer;