import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTaskByID } from "../../actions/task";

import Box from "@mui/material/Box";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./task.css";
import Navbar from "../navbar/navbar";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const steps = [
  "Raajwada",
  "Chhappan Dukan",
  "South Tukoganj",
  "Mousa Chai Wala",
  "Chill Baby Restaurant",
];
export default function Task() {
  // const userId = "61d1e29522cf92e8a1d62ccc";
  // const { id } = useParams();
  // const dispatch = useDispatch();
  // dispatch(getTaskByID(id));
  // const task = useSelector((state) => state.getTaskByUSerIDReducer);
  // console.log(task);

  //below code is for frontend

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,

    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "dark" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "green" : "grey",
    },
  }));

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    let newSkipped = skipped;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  return (
    <div className="task-body">
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
                Task Heading
              </div>
              <p
                style={{
                  color: "#072227",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is
              </p>
            </div>
            <img style={{ width: "300px" }} src="./Indore.svg"></img>
          </div>
          <div className="col-5 glass-task">
            <Box style={{ marginLeft: "30px" }} sx={{ width: "80%" }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};

                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography
                    style={{
                      fontSize: "15px",
                      color: "green",
                      fontWeight: "bold",
                    }}
                    sx={{ mt: 2, mb: 1 }}
                  >
                    <BorderLinearProgress
                      variant="determinate"
                      value={(activeStep / steps.length) * 100}
                    />
                    All steps completed - you&apos; finished the Challenge
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    {/* <Button onClick={handleReset}>Reset</Button> */}
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography
                    style={{ fontSize: "15px" }}
                    sx={{ mt: 2, mb: 1 }}
                  >
                    <BorderLinearProgress
                      variant="determinate"
                      value={(activeStep / steps.length) * 100}
                    />
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "0 1 auto" }} />
                    <Button style={{ fontSize: "15px" }} onClick={handleNext}>
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
