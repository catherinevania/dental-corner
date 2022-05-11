import React from "react";
import IMG from "../../assets/img/article.jpg";
import { Link } from "react-router-dom";
import { Button, Header, Paragraph } from "../../components";
import {
  InfoContainer,
  Image,
  Container,
  Container2,
  DateContainer,
  TitleContainer,
  TitleContainer2,
  ParagraphContainer,
  ButtonContainer,
} from "./style";

export const Card1 = () => {
  return (
    <Container>
      <Link to="../../pages/Article">
        <Image src={IMG} alt="Image" />
      </Link>
      <InfoContainer>
        <DateContainer>
          <Paragraph b1med>11 Mei 2022</Paragraph>
        </DateContainer>
        <TitleContainer>
          <Header h7 bold>
            Get 50% Discount for Scaling
          </Header>
        </TitleContainer>
      </InfoContainer>
    </Container>
  );
};

export const Card2 = () => {
  return (
    <Container2>
      <TitleContainer2>
        <Header h6 bold>
          Consultation
        </Header>
      </TitleContainer2>
      <ParagraphContainer>
        <Header h7 medium>
          Pilih jadwal untuk melakukan konsultasi tentang keluhan anda terkait
          kesehatan gigi
        </Header>
      </ParagraphContainer>
      <ButtonContainer>
        <Button>Book Consultation</Button>
      </ButtonContainer>
    </Container2>
  );
};
