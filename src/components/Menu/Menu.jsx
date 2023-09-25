import { Link } from "react-router-dom";
import {
  DesktopContainer,
  IconContainer,
  // Input,
  Li,
  LogoContainer,
  MenuContaciner,
  SearchContainer,
  Nav,
  Ul,
  H1,
} from "./Menu.styles";

//Components
import { InputComponent } from "../Input/Input.styles";

//Icons
import { AiOutlineMenu } from "react-icons/ai";
import { ImBrightnessContrast } from "react-icons/im";
import { GiWarlockHood } from "react-icons/gi";
import { SlMagnifier } from "react-icons/sl";

export const Menu = () => {
  return (
    <>
      <MenuContaciner>
        <DesktopContainer>
          <LogoContainer>
            <GiWarlockHood style={{ fontSize: "30px" }} />
            <H1>GameDB</H1>
          </LogoContainer>

          <SearchContainer>
            <InputComponent />

            <SlMagnifier style={{ fontSize: "20px" }} />
          </SearchContainer>

          <Nav>
            <Ul>
              <Li>
                <Link
                  style={{ textDecoration: "none", color: "#000000" }}
                  to="/"
                >
                  Home
                </Link>
              </Li>
              <Li>
                <Link
                  style={{ textDecoration: "none", color: "#000000" }}
                  to="/about"
                >
                  About
                </Link>
              </Li>
              <Li>
                <Link
                  style={{ textDecoration: "none", color: "#000000" }}
                  to="/contact"
                >
                  Contatc
                </Link>
              </Li>
            </Ul>
          </Nav>
        </DesktopContainer>

        <IconContainer>
          <AiOutlineMenu style={{ fontSize: "25px" }} />
          <ImBrightnessContrast style={{ fontSize: "25px" }} />
        </IconContainer>
      </MenuContaciner>
    </>
  );
};
