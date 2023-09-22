import styled from "styled-components";

export const Card = styled.div`
  background: radial-gradient(
    circle,
    rgba(90, 185, 193, 1) 0%,
    rgba(45, 67, 253, 1) 100%
  );
  border: 1px solid #000000;
  border-radius: 5px;
  width: 270px;
  height: 350px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (min-width: 375px) {
    width: 330px;
    height: 350px;

    gap: 10px;
  }

  /* Mobile Large */
  @media (min-width: 414px) {
    width: 350px;
    height: 370px;
  }

  /* Tablet Portrit */
  @media (min-width: 712px) {
    width: 320px;
    height: 370px;
  }

  /* Laptop Small */
  @media (min-width: 1366px) {
    width: 280px;
    height: 350px;
  }

  @media (min-width: 1920px) {
    width: 250px;
    height: 350px;
  }
`;

export const Img = styled.img`
  width: 260px;
  border-radius: 5px;

  @media (min-width: 375px) {
    width: 330px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  gap: 5px;

  @media (min-width: 712px) {
    margin: 15px 0;
    gap: 7px;
  }
`;

export const P = styled.p`
  font-weight: 400;
`;

export const Title = styled.p`
  font-weight: 600;
`;
export const Span = styled.span`
  font-style: italic;
`;
