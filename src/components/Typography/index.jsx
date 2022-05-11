import styled, { css } from "styled-components";

export const Header = styled.h1`
  letter-spacing: 0.005em;

  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `}

  ${(props) =>
    props.medium &&
    css`
      font-weight: 500;
    `}
    

  ${(props) =>
    props.h1 &&
    css`
      font-size: 64px;
      line-height: 140%;
    `}

    ${(props) =>
    props.h2 &&
    css`
      font-size: 48px;
      line-height: 120%;
    `}

    ${(props) =>
    props.h3 &&
    css`
      font-size: 18px;
      line-height: 22px;
    `}

    ${(props) =>
    props.h6 &&
    css`
      font-size: 20px;
      line-height: 140%;
    `}

  ${(props) =>
    props.h7 &&
    css`
      font-size: 16px;
    `}
`;
export const Paragraph = styled.div`
  ${(props) =>
    props.b1med &&
    css`
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    `}
`;
