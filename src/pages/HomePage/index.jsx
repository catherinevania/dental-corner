import React from "react";
import { Button } from "../../components/";
import { Card1 } from "../../components/";
import { Card2 } from "../../components/Card";

const HomePage = () => {
  return (
    <div>
      <p>ini homepage</p>
      <Button noBgButton>Hello</Button>
      <Card1 />
      <Card2 />
    </div>
  );
};

export default HomePage;
