import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: linear-gradient(
    35deg,
    rgba(52, 87, 243, 1) 0%,
    rgba(42, 255, 167, 1) 100%
  );
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 400;
  &:hover {
    font-weight: 600;
    background: linear-gradient(
      286deg,
      rgba(52, 87, 243, 1) 0%,
      rgba(42, 255, 167, 1) 100%
    );
  }
`;
