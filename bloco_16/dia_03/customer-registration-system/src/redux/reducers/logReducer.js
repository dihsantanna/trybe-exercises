import { LOGIN_OK, LOGOUT } from '../actions/types';

const loggedIn = 'loggedIn';
const storage = localStorage.getItem(loggedIn) === 'true';

const INITIAL_STATE = {
  loggedIn: storage || false,
};

function logReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_OK:
    localStorage.setItem(loggedIn, true);
    return {
      loggedIn: true,
    };
  case LOGOUT:
    localStorage.removeItem(loggedIn);
    return {
      loggedIn: false,
    };
  default:
    return state;
  }
}

export default logReducer;
