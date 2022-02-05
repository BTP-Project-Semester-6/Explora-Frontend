import "./rightSideBar.css";
import Task from "../task/task";
import Suggestion from "../showFriend/suggestion";

function RightSideBar() {
  return (
    <div>
      <div>
        <div className="right-box">
          <div
            // className="left-up"
            style={{
              margin: "10px",
              textAlign: "center",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "20px",
              background: "white",
            }}
          >
            <div
              className="heading-sug"
              style={{ fontSize: "20px", paddingTop: "20px" }}
            >
              <b>Tasks</b>
            </div>
            <div
              className="leftfriends"
              style={{
                margin: "10px",
                overflowY: "auto",
                height: "230px",
              }}
            >
              <Task></Task>
              <Task></Task>
              <Task></Task>
              <Task></Task>
              <Task></Task>
              <Task></Task>
              <Task></Task>
              <Task></Task>
            </div>
          </div>
          {/* <hr style={{ margin: "10px" }}></hr> */}
          <div
            style={{
              margin: "10px",
              marginTop: "50px",
              textAlign: "center",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "20px",
              padding: "20px",
              background: "white",
            }}
          >
            <div className="heading-sug" style={{ fontSize: "20px" }}>
              <b>Suggestions</b>
            </div>

            <div
              className="leftfriends"
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
                overflowY: "auto",
                height: "250px",
              }}
            >
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
              <Suggestion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightSideBar;
