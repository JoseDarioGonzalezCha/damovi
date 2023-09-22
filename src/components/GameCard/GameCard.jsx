import { Card, Img } from "./GameCard.styles";

export const GameCard = ({ thumbnail, title, genre, publisher, developer }) => {
  return (
    <Card>
      <Img src={thumbnail} alt={title} />
      <p>Genre: {genre}</p>
      <p>Publisher: {publisher}</p>
      <p>Developer: {developer}</p>
    </Card>
  );
};
