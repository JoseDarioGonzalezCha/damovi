import { Card, Img, P, Description, Title, Span } from "./GameCard.styles";

export const GameCard = ({ thumbnail, title, genre, publisher, developer }) => {
  return (
    <Card>
      <Img src={thumbnail} alt={title} />
      <Description>
        <Title>
          Title: <Span>{title}</Span>
        </Title>
        <P>Genre: {genre}</P>
        <P>Publisher: {publisher}</P>
        <P>Developer: {developer}</P>
      </Description>
      <button>Details</button>
    </Card>
  );
};
