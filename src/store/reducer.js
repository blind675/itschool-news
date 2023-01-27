export const initialState = {
  favNews: [],
};

export function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      const isInList = state.favNews.find((news) => {
        return news.id === action.payload.id;
      });

      if (isInList) {
        return state;
      } else {
        const newSate = {
          favNews: [action.payload, ...state.favNews],
        };

        return newSate;
      }
    }
    case "REMOVE_FROM_FAVORITES": {
      const filteredNews = state.favNews.filter((news) => {
        return news.id !== action.payload;
      });

      const newState = {
        favNews: filteredNews,
      };

      return newState;
    }
    default: {
      return state;
    }
  }
}
