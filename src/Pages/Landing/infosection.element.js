import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { bounceInLeft } from "react-animations";

const bounceAnimation = keyframes`${bounceInLeft}`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 205px;
  padding-left: px;

  @media screen and (max-width: 990px) {
    padding-right: 25px;
    padding-left: 25px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "10px 20px" : "10px 20px")};
  color: #fff;
  right: 0;
  font-size: ${({ fontBig }) => (fontBig ? "15px" : "10px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-outs;
    background: green;
    /* background-color: ${({ primary }) =>
      primary ? "#0467FB" : "#4B59F7"}; */
  }
  @media screen and (max-width: 960px) {
    width: 50%;
    font-size: 10px;
  }
`;

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  /* background-image: url("https://res.cloudinary.com/prerit-cloud/image/upload/v1641625477/2202447_sao59i.jpg"); */
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: flex-end;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  animation: 1s ${bounceAnimation};
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.div`
  color: #292c6d;
  font-size: 15px;
  line-height: 16px;
  /* font-weight: 700; */
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.p`
  margin-bottom: 24px;
  font-size: 30px;
  line-height: 1.1;
  font-weight: bold;
  color: #ff1700;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  color: #1c6dd0;
`;

export const Cross = styled.div`
  right: 0;
  top: 0;
  margin: 30px;
  position: fixed;
`;

export const Input = styled.input`
  padding: 15px;
  font-size: 20px;
  width: 90%;
  margin: 15px;
  box-sizing: border-box;
  letter-spacing: 1px;
  color: white;
  border: 0;
  border-bottom: 10px solid #ccc;
  background-color: #101522;
  transition: 1s;
`;
export const Heading1 = styled.p`
  margin-bottom: 24px;
  font-size: 45px;
  line-height: 1.1;
  /* font-weight: 600; */
  color: #1c2237;
  /* font-family: cursive; */
  text-align: center;
`;

export const ForgetPass = styled.div`
  color: black;
  font-size: 15px;
  text-align: right;
  margin-right: 7%;
  cursor: pointer;
  margin-bottom: 2%;
`;
export const Button1 = styled.button`
  margin-bottom: 24px;
  font-size: 25px;
  line-height: 1.1;
  font-weight: 600;
  color: #1c2237;
  padding: 10px;
  /* font-family: Arial, Helvetica, sans-serif; */
  text-align: center;
  cursor: pointer;
  margin: auto;
  display: block;
  background: black;
  color: white;

  &:hover {
    background: green;
    color: yellow;
  }
`;

export const Account = styled.div`
  color: black;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  /* background: lightblue; */
  margin-top: 10px;
  font-size: 1.2rem;
`;

export const FullName = styled.input`
  padding: 15px;
  font-size: 18px;
  width: 45%;
  margin: 15px;
  box-sizing: border-box;
  letter-spacing: 1px;
  color: white;
  border: 0;
  border-bottom: 10px solid #ccc;
  background-color: #101522;
  transition: 1s;
  @media screen and (max-width: 850px) {
    width: 90%;
    display: flex;
    justify-content: center;
    padding: 7px;
    margin: 3px;
    padding: 10px;
  }
`;

export const Age = styled.input`
  padding: 15px;
  font-size: 18px;
  width: 45%;
  right: 0;
  margin-right: 7%;
  margin: 15px;
  box-sizing: border-box;
  letter-spacing: 1px;
  color: white;
  border: 0;
  border-bottom: 10px solid #ccc;
  background-color: #101522;
  transition: 1s;
  @media screen and (max-width: 850px) {
    width: 90%;
    display: flex;
    padding: 7px;
    margin: 3px;
    justify-content: center;
  }
`;

export const Input1 = styled.input`
  padding: 15px;
  font-size: 20px;
  width: 45%;
  margin: 15px;
  box-sizing: border-box;
  letter-spacing: 1px;
  color: white;
  border: 0;
  border-bottom: 10px solid #ccc;
  background-color: #101522;

  transition: 1s;
  @media screen and (max-width: 850px) {
    width: 90%;
    display: flex;
    padding: 7px;
    margin: 3px;
    justify-content: center;
  }
`;

export const Prof = styled(Link)`
  color: white;
  text-align: center;
  align-items: center;

  cursor: pointer;
  margin-top: 10px;
  font-size: 1.5rem;
`;

export const Button2 = styled.button`
  border-radius: 20px;
  margin-bottom: 24px;
  font-size: 25px;
  line-height: 1.1;
  font-weight: 600;
  padding: 10px;
  /* font-family: Arial, Helvetica, sans-serif; */
  text-align: center;
  cursor: pointer;
  margin: auto;
  display: block;
  background: #0467fb;
  color: black;

  &:hover {
    background: green;
    color: yellow;
  }
`;

export const Button3 = styled.button`
  margin-bottom: 24px;
  font-size: 25px;
  line-height: 1.1;
  font-weight: 600;
  color: #1c2237;
  padding: 10px;
  /* font-family: Arial, Helvetica, sans-serif; */
  text-align: center;
  cursor: pointer;
  margin: auto;
  display: block;
  background: black;
  color: white;
`;
