import charAPI from '../services/charAPI';

export const IS_FETCHING = 'IS_FETCHING';
export const FETCH_OK = 'FETCH_OK';
export const FETCH_ERROR = 'FETCH_ERROR';

const isFetching = () => ({ type: IS_FETCHING });

const getChar = (character) => ({ type: FETCH_OK, character });

const getCharError = (error) => ({ type: FETCH_ERROR, error });

const requestChar = (char) => (async (dispatch) => {
  dispatch(isFetching());
  const result = await charAPI(char);
  return typeof result === 'object'
  ? dispatch(getChar(result))
  : dispatch(getCharError(result));
})

export default requestChar;
