import { useState } from "react";
import {
  CardContainer,
  Question,
  Option,
  OptionHeader,
} from "./QuestionCard.styles";

const QuestionCard = (props) => {
  const [selectedOption, setSelectedOption] = useState(-1);

  const optionClickHandler = (qindex, opindex) => {
    props.updateChoice(qindex, opindex);
    setSelectedOption(opindex);
  };

  return (
    <CardContainer>
      <Question>{props.data.question}</Question>
      <OptionHeader>Options:</OptionHeader>
      {props.data.options.map((data, index) => {
        return (
          <Option
            onClick={() => {
              optionClickHandler(props.index, index);
            }}
            selected={selectedOption == index}
          >
            {data}
          </Option>
        );
      })}
    </CardContainer>
  );
};

export default QuestionCard;
