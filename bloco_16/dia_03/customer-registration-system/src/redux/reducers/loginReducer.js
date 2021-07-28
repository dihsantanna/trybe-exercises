import { LOGIN_OK } from '../actions/types';

const storage = localStorage.getItem('loggedIn');

const INITIAL_STATE = {
  loggedIn: storage || false,
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_OK:
    localStorage.setItem('loggedIn', true);
    return {
      loggedIn: true,
    };
  default:
    return state;
  }
}

export default loginReducer;
