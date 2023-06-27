import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Buttons(props) {
  return (
    <ButtonContainer className="buttonCont">
      <BackButton to={props.backLink}>Back</BackButton>
      <NextButton to={props.NextFunc}>
        <button type="submit">
          {props.buttonTxt}
          {props.img}
        </button>
      </NextButton>
    </ButtonContainer>
  );
}
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 775px;
  padding: 0px 48px;
`;
const BackButton = styled(Link)`
  border: 1px solid #212529;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-transform: capitalize;
  color: #212529;
  width: 93px;
  height: 53px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    border: 1px solid rgba(194, 165, 249, 0.8);
    background: rgba(185, 180, 195, 0.3);
  }
`;
const NextButton = styled(Link)`
  text-decoration: none;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    text-decoration: none;
    border-radius: 8px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-transform: capitalize;
    background-color: #212529;
    color: #ffffff;
    width: 136px;
    height: 61px;
    border: 4px solid #ffffff;
    :hover {
      border: 4px solid rgba(194, 165, 249, 0.8);
      background-color: #212529;
    }
  }
`;
