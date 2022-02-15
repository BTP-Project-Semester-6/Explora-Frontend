import React, { useEffect } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import "./task.css";
import { styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTaskByID } from "../../actions/task";
import jwt_decode from "jwt-decode";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
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
export default function Task() {
  const userId = "61d1e29522cf92e8a1d62ccc";
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // dispatch(getTaskByID(id));

  const [host, setHost] = React.useState("");
  const [hostID, setHostID] = React.useState("");

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else if (localStorage.getItem("token") != "null") {
      const decoded = jwt_decode(localStorage.getItem("token"));
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        if (decoded) {
          console.log("DECODED");
          console.log(decoded);
          setHostID(decoded._id);
          setHost(decoded.username);

          dispatch(getTaskByID(id, decoded._id));
        }
      }
    } else {
      navigate("/login");
    }
  }, []);

  const { task } = useSelector((state) => state.getTaskByUSerIDReducer);
  console.log(task.data);

  //below code is for frontend

  return (
    <div className="task-body">
      {task.data === undefined ? (
        <div>No Task</div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-5 ">
              <div>
                <div
                  style={{
                    marginTop: "30px",
                    marginBottom: "10px",
                    color: "#072227",
                    fontSize: "25px",
                    fontWeight: "bolder",
                  }}
                >
                  {task.data.challengeID.name}
                </div>
                <p
                  style={{
                    color: "#072227",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before the final copy
                  is
                </p>
              </div>
              <img style={{ width: "50%" }} src="./Indore.svg"></img>
            </div>
            <div className="col-5  glass-task ">
              <FormGroup>
                <FormControlLabel
                  style={{ margin: "15px" }}
                  control={<Checkbox defaultUnChecked />}
                  label={
                    <Typography variant="h4" color="textPrimary">
                      Sarafa Market
                    </Typography>
                  }
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                />
                <FormControlLabel
                  style={{ margin: "15px" }}
                  control={<Checkbox defaultUnChecked />}
                  label={
                    <Typography variant="h4" color="textPrimary">
                      Chai sutta baar
                    </Typography>
                  }
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                />
                <FormControlLabel
                  style={{ margin: "15px" }}
                  control={<Checkbox defaultUnChecked />}
                  label={
                    <Typography variant="h4" color="textPrimary">
                      Chappan Dukan
                    </Typography>
                  }
                  sx={{
                    color: "blue",
                    "& .MuiSvgIcon-root": { fontSize: 30 },
                  }}
                />
                <FormControlLabel
                  style={{ margin: "15px" }}
                  control={<Checkbox defaultUnChecked />}
                  icon={<LocationOnIcon />}
                  checkedIcon={<LocationOnIcon />}
                  label={
                    <Typography variant="h4" color="textPrimary">
                      C21 Mall
                    </Typography>
                  }
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                />
                <FormControlLabel
                  style={{ margin: "15px" }}
                  control={<Checkbox defaultUnChecked />}
                  label={
                    <Typography variant="h4" color="textPrimary">
                      Lotus Velly
                    </Typography>
                  }
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                />
              </FormGroup>
              <BorderLinearProgress variant="determinate" value={50} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
