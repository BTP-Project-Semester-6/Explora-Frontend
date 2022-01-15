import { QuizContainer, SubmitButton } from "./PersonalityQuiz.styles.js";
import { quizQuestions } from "./quizQuestions.js";
import QuestionCard from "./QuestionCard/QuestionCard.jsx";
import { useState } from "react";

const PersonalityQuiz = () => {
  const [selectedOptions, setSelectedOptions] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]);

  const updateChoice = (questionIndex, choiceIndex) => {
    const choiceList = selectedOptions;
    choiceList[questionIndex] = choiceIndex;
    console.log(choiceList);
    setSelectedOptions(choiceList);
  };

  const submitHandler = () => {
    if (selectedOptions.includes(-1)) {
      console.log("Please answer all the questions!");
      return;
    }
    console.log("Ok");
  };

  return (
    <QuizContainer>
      <h1>PERSONALITY QUIZ</h1>
      <h4>
        Take this personality quiz so that we'll be able to suggest the best
        travel buddies for you at your disposal
      </h4>
      {quizQuestions.map((data, index) => {
        return (
          <QuestionCard data={data} index={index} updateChoice={updateChoice} />
        );
      })}
      <SubmitButton onClick={submitHandler}>SUBMIT</SubmitButton>
    </QuizContainer>
  );
};

export default PersonalityQuiz;
