import { QuizContainer, SubmitButton } from "./PersonalityQuiz.styles.js";
import { quizQuestions } from "./quizQuestions.js";
import QuestionCard from "./QuestionCard/QuestionCard.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Toast from "../../Components/Toast/toast.js";

const PersonalityQuiz = () => {
  const [selectedOptions, setSelectedOptions] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]);
  const [user, setUser] = useState(undefined);

  const navigate = useNavigate();

  const updateChoice = (questionIndex, choiceIndex) => {
    const choiceList = selectedOptions;
    choiceList[questionIndex] = choiceIndex;
    console.log(choiceList);
    setSelectedOptions(choiceList);
  };

  const submitHandler = () => {
    if (selectedOptions.includes(-1)) {
      Toast("", "Please answer all the questions!", "", "");
      return;
    }
    console.log("Ok");
    fetch("http://localhost:3001/api/user/addpersonalityquiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user._id,
        answers: selectedOptions,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.errors) {
          Toast("", result.errors, "", "");
        } else {
          Toast("Successfully completed the quiz", "", "", "");
          navigate("/home");
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else {
      const decoded = jwt_decode(localStorage.getItem("token"));
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.log(decoded);
        setUser(decoded);
      }
    }
  }, []);

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
