import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { colors } from "../Colors";

export const Input = styled(TextField).attrs(() => ({
  variant: "outlined",
  InputProps: { style: { fontSize: "1.8rem", fontFamily: "inherit" } },
  InputLabelProps: { style: { fontSize: "1.5rem", fontFamily: "inherit" } },
}))`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
