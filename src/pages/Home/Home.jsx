import { useContext } from "react";

//Context
import { GameListContext } from "../../contexts/GameListContext";

//Components
import { GameCard } from "../../components/GameCard/GameCard";

//Styles
import { Container } from "./Home.styles";
import { Spinner } from "../../components/Spinner/Spinner";

export const Home = () => {
  const { gameList } = useContext(GameListContext);

  return (
    <Container>
      {gameList.length > 0 ? (
        gameList.map((game, id) => (
          <GameCard
            key={id}
            thumbnail={game.thumbnail}
            title={game.title}
            genre={game.genre}
            publisher={game.publisher}
            developer={game.developer}
          />
        ))
      ) : (
        <Spinner />
      )}
    </Container>
  );
};
