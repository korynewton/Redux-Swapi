import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: 
      return {
        ...state,
        isFetching: true
      }
    case SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        isFetching: false
      }
    case FAILURE:
      return {
        ...state,
        isFetching: false,
        error: 'error, try using the force'
      }
    default:
      return state;
  }
};
