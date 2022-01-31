import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fee140;
  background-image: linear-gradient(90deg, #fa709a 0%, #fe8d40 100%);
  color: white;
  padding: 10px;
  margin: 25px 10px;
  text-align: left;
  border-radius: 15px;
`;

export const Question = styled.h3`
  font-weight: 600;
`;

export const OptionHeader = styled.h4`
  padding: 10px 0px 10px;
`;

export const Option = styled.div`
  border: 2px solid white;
  border-radius: 15px;
  margin-top: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "white" : "#00000000")};
  color: ${(props) => (props.selected ? "#fa709a" : "white")};
  transition: transform 0.5s ease-out;
  &:hover {
    transform: scale(1.01);
  }
`;
