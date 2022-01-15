import styled from "styled-components";

export const QuizContainer = styled.div`
  max-width: 960px;
  margin: 30px auto 30px auto;
  border-radius: 15px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 0px 15px gray;
`;

export const SubmitButton = styled.button`
  background-color: #fee140;
  background-image: linear-gradient(90deg, #fa709a 0%, #fe8d40 100%);
  color: white;
  height: 50px;
  width: 150px;
  color: white;
  border: none;
  border-radius: 10px;
  margin: 10px;
  transition: 0.5s transform ease-out;
  &:hover {
    transform: scale(1.05);
    background-color: white;
    background-image: none;
    color: #fa709a;
    border: 2px solid #fa709a;
  }
`;
