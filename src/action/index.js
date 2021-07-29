import charAPI from '../services/charAPI';
import { IS_FETCHING, FETCH_OK, FETCH_ERROR } from "./types";

const isFetching = () => ({ type: IS_FETCHING });

const getChar = (character) => ({ type: FETCH_OK, character });

const getCharError = (error) => ({ type: FETCH_ERROR, error });

const requestChar = (char) => (async (dispatch) => {
  await dispatch(isFetching());
  const result = await charAPI(char);
  return Array.isArray(result)
  ? dispatch(getChar(result[0]))
  : dispatch(getCharError(result[0]));
})

export default requestChar;
