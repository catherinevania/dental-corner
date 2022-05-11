import React from "react";
import { Link, Outlet } from "react-router-dom";
import LOGO from "../../assets/img/logo-dental.svg";
import DUMMY from "../../assets/img/pp-dummy.jpg";
import {
  Logo,
  Container,
  Container1,
  ProfilePhoto,
  OuterDiv,
  ContentWrapper,
} from "./Style";
import { Flexer } from "../CustomDiv";
import { Button } from "../Button";

const Navbar = () => {
  return (
    <OuterDiv>
      <Container>
        <Flexer itemCenter spaceBetween>
          <Link to="/">
            <Logo src={LOGO} alt="Logo" />
          </Link>
          <Flexer>
            <Container1>
              <Button noBgButton>
                <Link to="/booking">Book</Link>
              </Button>
              <Button noBgButton>
                <Link to="/article">Article</Link>
              </Button>
              <Button noBgButton>
                <Link to="/medical-log">Medical Log</Link>
              </Button>
              <ProfilePhoto src={DUMMY} alt="Profile Photo"></ProfilePhoto>
            </Container1>
          </Flexer>
        </Flexer>
      </Container>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </OuterDiv>
  );
};

export default Navbar;
