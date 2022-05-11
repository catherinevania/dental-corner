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
  transition: 250ms;
  &:hover {
    cursor: pointer;
    background-color: ${colors.grayDark};
  }

  ${(props) =>
    props.noBgButton &&
    css`
      background-color: transparent;
      color: ${colors.black};
      font-weight: bold;
      &:hover {
        cursor: pointer;
        color: ${colors.white};
        background-color: ${colors.primary};
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
