import React from "react";
import { Link, Outlet } from "react-router-dom";
import LOGO from "../../assets/img/logo-dental.svg";
import DUMMY from "../../assets/img/pp-dummy.jpg";
import { Logo, Container, Container1, ProfilePhoto } from "./Style";
import { Flexer } from "../CustomDiv";
import { Button } from "../Button";

const Navbar = () => {
  return (
    <div>
      <Container>
        <Flexer itemCenter spaceBetween>
          <Logo src={LOGO} alt="Logo" />
          <Flexer>
            <Container1>
              <Button noBgButton>
                <Link to="/">Book</Link>
              </Button>
              <Button noBgButton>
                <Link to="/">Article</Link>
              </Button>
              <Button noBgButton>
                <Link to="/">Medical Log</Link>
              </Button>
              <ProfilePhoto src={DUMMY} alt="Profile Photo"></ProfilePhoto>
            </Container1>
          </Flexer>
        </Flexer>
      </Container>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
