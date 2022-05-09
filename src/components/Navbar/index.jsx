import React from "react";
import { Link, Outlet } from "react-router-dom";
import LOGO from "../../assets/img/logo-dental.svg";
import { Logo, Container, Container1 } from "./Style";
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
              <Link></Link>
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
