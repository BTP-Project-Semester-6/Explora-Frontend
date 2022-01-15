import {
  CardContainer,
  Question,
  Option,
  OptionHeader,
} from "./QuestionCard.styles";

const QuestionCard = () => {
  return (
    <CardContainer>
      <Question>
        How much would you prefer beaches to be an ideal destination for you?
      </Question>
      <OptionHeader>Options:</OptionHeader>
      <Option>Not at all ideal</Option>
      <Option>Somewhat Idel</Option>
      <Option>Ideal</Option>
      <Option>Very Ideal</Option>
      {/* <input type="radio" id="html" name="fav_language" value="HTML" />
      <label for="html">HTML</label>
      <br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label for="css">CSS</label>
      <br />
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
      />
      <label for="javascript">JavaScript</label> */}
    </CardContainer>
  );
};

export default QuestionCard;
