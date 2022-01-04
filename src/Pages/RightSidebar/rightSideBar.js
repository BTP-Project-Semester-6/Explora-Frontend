import "./rightSideBar.css";
import Task from "../task/task";
import Suggestion from "../showFriend/suggestion";

function RightSideBar() {
  return (
    <div>
      <div className=" glass right-box">
        <div className="heading-task">Task</div>
        <div className="task-scroll">
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
          <Task></Task>
        </div>
        <hr style={{ margin: "5px" }}></hr>
        <div className="heading-sug">Suggestions</div>
        <div className="sug-scroll">
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
        </div>
      </div>
    </div>
  );
}
export default RightSideBar;
