import { createContext, useEffect, useState } from "react";

export const GameListContext = createContext();

export default function GameListProvider({ children }) {
  const [gameList, setGameList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchGame();
  }, []);

  const fetchGame = async () => {
    const url = "https://mmo-games.p.rapidapi.com/games";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "65cf15ba9fmsh0d64439d5b8cfe3p17e64cjsn27b58fdf593e",
        "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setGameList(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredGames = gameList.filter((game) =>
    game.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <GameListContext.Provider
      value={{
        gameList,
        setGameList,
        fetchGame,
        filteredGames,
        setSearchText,
        searchText,
        handleSearchInputChange,
      }}
    >
      {children}
    </GameListContext.Provider>
  );
}
