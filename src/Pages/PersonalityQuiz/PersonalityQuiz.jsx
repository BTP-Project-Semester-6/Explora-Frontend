import { QuizContainer } from "./PersonalityQuiz.styles.js";
import { quizQuestions } from "./quizQuestions.js";
import QuestionCard from "./QuestionCard/QuestionCard.jsx";

const PersonalityQuiz = () => {
  console.log(quizQuestions);
  return (
    <QuizContainer>
      <h1>PERSONALITY QUIZ</h1>
      <h4>
        Take this personality quiz so that we'll be able to suggest the best
        travel buddies for you at your disposal
      </h4>
      <QuestionCard />
    </QuizContainer>
  );
};

export default PersonalityQuiz;
