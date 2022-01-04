import "./task.css";
import Button from "@mui/material/Button";
import ProgressBar from "../progressBar/progressBar";
import LinearProgressWithLabel, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
function Task() {
  return (
    <div className=" glass square">
      <div>
        <div className="title">Visit this cites in 5 Days</div>
        <div className="dec">
          You have to visit Indore Bihar and Gwaliwor Mumbai
        </div>
        <ProgressBar></ProgressBar>
      </div>
    </div>
  );
}
export default Task;
