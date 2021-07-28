import customers from '../../private/data/customers';

const INITIAL_STATE = {
  customers: [...customers],
};

function customersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default customersReducer;
