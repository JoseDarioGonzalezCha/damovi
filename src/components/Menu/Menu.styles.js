import styled from "styled-components";

export const MenuContaciner = styled.div`
  background: linear-gradient(
    197deg,
    rgba(86, 175, 198, 1) 0%,
    rgba(45, 67, 253, 1) 100%
  );
  padding: 10px 15px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  @media (min-width: 712px) {
    padding: 15px 15px;
  }
`;

export const DesktopContainer = styled.div`
  display: none;

  /* Tablet Portrit */
  @media (min-width: 712px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  @media (min-width: 712px) {
    width: 15%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const H1 = styled.h1`
  font-size: 18px;
  font-family: "Inter";
  font-weight: 700;

  color: #000000;
`;

export const SearchContainer = styled.div`
  background-color: #ffffff;
  width: 35%;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 8px;
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 712px) {
    display: flex;
    justify-content: end;
    /* background-color: red; */
    width: 40%;
  }
`;

export const Ul = styled.ul`
  @media (min-width: 712px) {
    /* background-color: blue; */
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Li = styled(Ul)`
  @media (min-width: 712px) {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 712px) {
    display: none;
  }
`;
