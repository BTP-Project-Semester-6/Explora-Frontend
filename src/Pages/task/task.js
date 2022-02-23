import "./task.css";
import Button from "@mui/material/Button";
import ProgressBar from "../progressBar/progressBar";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import { linearProgressClasses } from "@mui/material/LinearProgress";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "green" : "#308fe8",
  },
}));
function Task({ data }) {
  return (
    <div className=" glass square">
      <div>
        <div className="title">
          <a href={"/task/" + data._id}>{data.challengeID.name}</a>
        </div>
        <div className="dec">{data.challengeID.description}</div>
        <BorderLinearProgress
          variant="determinate"
          value={
            (data.locations.filter((v) => v.completed).length * 100) /
            data.locations.length
          }
        />
      </div>
    </div>
  );
}
export default Task;
