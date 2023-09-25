import { useContext, useState } from "react";

//Context
import { GameListContext } from "../../contexts/GameListContext";

//Components
import { GameCard } from "../../components/GameCard/GameCard";

//Styles
import { Container } from "./Home.styles";
import { Spinner } from "../../components/Spinner/Spinner";

export const Home = ({}) => {
  const { filteredGames } = useContext(GameListContext);

  return (
    <Container>
      {filteredGames.length > 0 ? (
        filteredGames.map((game, id) => (
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
