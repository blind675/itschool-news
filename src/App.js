import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
import Page404 from "./pages/Page404";
import { FavoritesContext } from "./store/context";
import { favoritesReducer, initialState } from "./store/reducer";

function App() {
  const [favState, favDispatch] = useReducer(favoritesReducer, initialState);

  const favContextValue = { favState, favDispatch };

  return (
    <div className="App">
      <FavoritesContext.Provider value={favContextValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/category/:categoryId" element={<NewsCategory />} />
          <Route path="/news/:newsId" element={<NewsDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
