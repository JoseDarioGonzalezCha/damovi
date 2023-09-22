//Contexts
import { useContext } from "react";
import { GameListContext } from "./contexts/GameListContext";

//COmponents
import { GameCard } from "./components/GameCard/GameCard";

function App() {
  const { gameList } = useContext(GameListContext);

  return (
    <>
      {gameList &&
        gameList.map((movie) => (
          <GameCard
            thumbnail={movie.thumbnail}
            title={movie.title}
            genre={movie.genre}
            publisher={movie.publisher}
            developer={movie.developer}
          />
        ))}
    </>
  );
}

export default App;
