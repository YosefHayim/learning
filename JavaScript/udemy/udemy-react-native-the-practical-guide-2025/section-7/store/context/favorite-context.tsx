import { createContext, ReactNode, useState } from "react";

interface FavoriteContextProps {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoritesContext = createContext<FavoriteContextProps>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoritesContextProvider = ({ children }: FavoriteProviderProps) => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteIds((prevIds) => [...prevIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteIds((prevIds) => prevIds.filter((favId) => favId !== id));
  };

  const value = {
    ids: favoriteIds,
    addFavorite,
    removeFavorite,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};
