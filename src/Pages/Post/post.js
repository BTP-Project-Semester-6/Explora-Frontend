import * as React from "react";
import "./post.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";

import ShowComment from "../comment/showComment";
//darksalmon

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      style={{
        marginBottom: "3%",
        borderRadius: "2%",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            alt="Remy Sharp"
            src="https://image.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
          ></Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title="Himanshu Rane"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        style={{
          margin: "auto",
          borderRadius: "10px",
          height: "inherit",
          width: "80%",
        }}
        src={
          "https://image.freepik.com/free-photo/hiker-stand-camping-front-orange-tent-backpack-mountains_1150-9163.jpg"
        }
      />
      <CardContent>
        <Typography
          style={{ margin: "0px", color: "black", fontWeight: "600" }}
          variant="body3"
          color="text.primary"
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share"></IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className="collepes-section">
          <div style={{ width: "90%" }} className=" container row">
            <div className="col-11">
              <input
                class="form-control input-field"
                type="text"
                placeholder="Comment Here..."
                readonly
              />
            </div>
            <div className="col-1">
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </div>
          </div>
          <div className="show-comment-section">
            <CardContent>
              <ShowComment></ShowComment>
              <ShowComment></ShowComment>
              <ShowComment></ShowComment>
            </CardContent>
          </div>
        </div>
      </Collapse>
    </Card>
  );
}
