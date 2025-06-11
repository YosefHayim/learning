import { createContext, ReactNode, useState } from "react";

interface FavoriteContextProps {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

interface FavoriteProviderProps {
  children: ReactNode;
}

const FavoritesContext = createContext<FavoriteContextProps>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

const FavoritesContextProvider = ({ children }: FavoriteProviderProps) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteIds((prevIds) => [...prevIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteIds((prevIds) => prevIds.filter((favId) => favId !== id));
  };

  return <FavoritesContext.Provider value={{ ids: favoriteIds, addFavorite, removeFavorite }}>{children}</FavoritesContext.Provider>;
};

export default { FavoritesContext, FavoritesContextProvider };
