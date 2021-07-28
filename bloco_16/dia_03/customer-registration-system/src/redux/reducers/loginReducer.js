import { LOGIN_OK } from '../actions/types';

const INITIAL_STATE = {
  loggedIn: false,
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_OK:
    return {
      loggedIn: true,
    };
  default:
    return state;
  }
}

export default loginReducer;
