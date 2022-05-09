import styled, { css } from "styled-components";
import { colors } from "../Colors";

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  border: 0px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.primaryDark};
  }

  ${(props) =>
    props.blackButton &&
    css`
      width: 100%;
      padding-top: 15px;
      padding-left: 15px;
      background-color: ${colors.black};
      font-size: 20;
      font-weight: normal;
      &:hover {
        cursor: pointer;
        background-color: ${colors.grayDark};
      }
    `}

  ${(props) =>
    props.noBgButton &&
    css`
      background-color: transparent;
      color: ${colors.black};
      padding: 5px 10px 5px 10px;
      font-weight: bold;
      &:hover {
        cursor: pointer;
        background-color: ${colors.grayLight};
      }
    `}
      
      ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      padding-top: 15px;
      padding-left: 15px;
    `}
`;
