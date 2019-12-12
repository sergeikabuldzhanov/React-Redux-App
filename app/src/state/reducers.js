import { GET_QUOTES_BY_PAGE, GET_RANDOM_QUOTE } from "./actionTypes";

const initialState = [];

export function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RANDOM_QUOTE:
      return action.payload;
    case GET_QUOTES_BY_PAGE:
      return {
        ...state,
        page: action.payload.page,
        pageContent: action.payload.quotes
      };
    default:
      return state;
  }
}
