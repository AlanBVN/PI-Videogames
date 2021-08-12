import {
  GET_GENRES,
  GET_GAMES_ID,
  GET_ALL_VIDEOGAMES,
  GET_GAMES_QUERY,
  POST_VIDEOGAME,
  ORDER_FILTER,
  FILTER_GENRES,
} from "../actions/index";

const initialState = {
  genres: [],
  videogames: [],
  videogame: [],
  createdVideogame: [],
  filteredGames: [],
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
    case FILTER_GENRES:
      return {
        ...state,
        videogames: state.videogames.filter((r) =>
          r.genres.includes(action.payload)
        ),
      };
    case ORDER_FILTER:
      switch (action.payload) {
        case "A-Z":
          return {
            ...state,
            videogames: state.videogames.sort((a, b) =>
              a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            ),
          };
        case "Z-A":
          return {
            ...state,
            videogames: state.videogames.sort((a, b) =>
              a.name < b.name ? 1 : b.name < a.name ? -1 : 0
            ),
          };
        case "ASC":
          return {
            ...state,
            videogames: state.videogames.sort((a, b) =>
              a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
            ),
          };
        case "DESC":
          return {
            ...state,
            videogames: state.videogames.sort((a, b) =>
              a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
            ),
          };

        default:
          return state;
      }
    default:
      return state;
  }
}

export default rootReducer;
