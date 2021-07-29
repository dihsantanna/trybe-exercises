export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

const API_URL = 'https://aws.random.cat/meow'

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(requestAPI());
    try {
      const response = await fetch(API_URL);
      const cat = await response.json();
      return dispatch(getPicture(cat));
    } catch (error) {
      console.log(error);
    }
  }
}
