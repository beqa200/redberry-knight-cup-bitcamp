import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import logo from "../assets/Khight cup logo.svg";
import PersonalBG from "../assets/second.png";
import SharedPageIndicator from "./SharedPageIndicator";
import arrow from "../assets/arrow-right-circle.png";

export default function Personal() {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [mobile, setMobile] = useState(localStorage.getItem("mobile"));
  const [date, setDate] = useState(localStorage.getItem("date"));

  const GlobalStyles = createGlobalStyle`
  body{
    margin: 0px;
  }
  .App {
    min-width: 1920px;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .innerCont{
    display: flex;
  }`;
  const Header = styled.div`
    display: flex;
    align-items: center;
    padding-left: 60px;
    width: 863px;
    height: 84px;
    background-color: #7025fb;
  `;
  const ImageContainer = styled.div`
    width: 923px;
    height: 996px;
    background: url(${PersonalBG});
    background-size: cover;
  `;

  const Personal = styled.div`
    margin: 115px 48px 0px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    h1 {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 150%;
      color: #000000;
      margin: 0px;
    }
    p {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 150%;
      text-transform: capitalize;
      color: #95939a;
      margin: 0px;
    }
  `;
  const RighdSide = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const RightHeader = styled(Header)`
    width: 949px;
    background-color: transparent;
    padding: 0px 48px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    text-transform: capitalize;
    color: #212529;
    border-bottom: 1px solid rgba(185, 180, 196, 0.3);
  `;
  const InputFieldCont = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 85px 48px 88px;
    margin: 0px;
  `;
  const InputField = styled.input`
    outline: none;
    border: none;
    display: flex;
    padding: 8px 16px;
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.125);
    border-radius: 4px;
    max-width: 743px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #212529;
  `;
  const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 775px;
    padding: 0px 48px;
  `;
  const BackButton = styled.button`
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
  `;
  const NextButton = styled(BackButton)`
    background: #212529;
    color: #ffffff;
    gap: 12px;
    width: 128px;
  `;
  return (
    <div className="App">
      <div className="innerCont">
        <div>
          <GlobalStyles />
          <Header>
            <img src={logo} alt="" />
          </Header>
          <ImageContainer />
        </div>
        <RighdSide>
          <RightHeader>Start creating your account</RightHeader>
          <SharedPageIndicator />
          <Personal>
            <h1>Personal information</h1>
            <p>This is basic informaton fields</p>
          </Personal>
          <InputFieldCont>
            <InputField placeholder="Name *" type="text"></InputField>
            <InputField placeholder="Email address *" type="email"></InputField>
            <InputField placeholder="Phone number *" type="mobile"></InputField>
            <InputField placeholder="Date of birth *" type="date"></InputField>
          </InputFieldCont>
          <Buttons>
            <BackButton>Back</BackButton>
            <NextButton>
              Next <img src={arrow} alt="arrow" />
            </NextButton>
          </Buttons>
        </RighdSide>
      </div>
    </div>
  );
}