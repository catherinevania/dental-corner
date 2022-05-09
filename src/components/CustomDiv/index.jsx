import styled, { css } from "styled-components";

export const Flexer = styled.div`
  display: flex;
  ${(props) =>
    props.row &&
    css`
      flex-direction: row;
    `}
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
${(props) =>
    props.spaceAround &&
    css`
      justify-content: space-around;
    `}
        ${(props) =>
    props.itemCenter &&
    css`
      align-items: center;
    `}
        ${(props) =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `}
        ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
`;
