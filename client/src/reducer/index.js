import {
  GET_GENRES,
  GET_GAMES_ID,
  GET_ALL_VIDEOGAMES,
  GET_GAMES_QUERY,
} from "../actions/index";

const initialState = {
  genres: [],
  videogames: [],
  videogame: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GENRES:
      return {

      };
    case GET_GAMES_ID:
      return {

      };
    case GET_ALL_VIDEOGAMES:
      return {
             ...state, videogames: action.payload
      };
    case GET_GAMES_QUERY:
      return {
      };
    default:
      return state;
  }
}

export default rootReducer;
