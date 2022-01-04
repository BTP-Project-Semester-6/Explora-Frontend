import Suggestion from "../showFriend/suggestion";
import Button from "@mui/material/Button";
import "./leftSideBar.css";

function LeftSideBar() {
  return (
    <div>
      <div className="glass right-box">
        <div className="left-up">
          <div className="nav-buttons">
            <Button variant="text">Option 2</Button>
          </div>
          <div className="nav-buttons">
            <Button color="success" variant="text">
              Option 2
            </Button>
          </div>
          <div className="nav-buttons">
            <Button color="secondary" variant="text">
              Option 3
            </Button>
          </div>
          <div className="nav-buttons">
            <Button color="success" variant="text">
              Option 3
            </Button>
          </div>
        </div>
        <hr style={{ margin: "5px" }}></hr>
        <div className="heading-sug">Contacts</div>
        <div className="sug-scroll-left">
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
export default LeftSideBar;
