import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 5px;

  background-color: #dfdfdf;

  /* Mobile Medium */
  @media (min-width: 375px) {
    padding: 20px 5px;
    gap: 15px;
  }

  /* Mobile Large */
  @media (min-width: 414px) {
    padding: 25px 5px;
    gap: 20px;
  }

  /* Tablet Portrit */
  @media (min-width: 712px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 20px;
    padding: 30px 5px;
  }

  /* Laptop Small */
  @media (min-width: 1366px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 20px;
    padding: 60px 5px;
  }

  /* Desktop */
  @media (min-width: 1920px) {
    padding: 80px 20px;
  }
`;
