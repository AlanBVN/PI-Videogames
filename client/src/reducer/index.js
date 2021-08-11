import {
  GET_GENRES,
  GET_GAMES_ID,
  GET_ALL_VIDEOGAMES,
  GET_GAMES_QUERY,
  POST_VIDEOGAME,
} from "../actions/index";

const initialState = {
  genres: [],
  videogames: [],
  videogame: [],
  createdVideogame: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_GAMES_ID:
      return {
        ...state,
        videogame: action.payload,
      };
    case POST_VIDEOGAME:
      return {
        ...state,
        createdVideogame: action.payload,
      };
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_GAMES_QUERY:
      return {
        ...state,
        videogames: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
