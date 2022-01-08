import "./ReviewCard.scss";
import * as React from "react";
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

import ShowComment from "../../comment/showComment";
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

export default function ReviewCard() {
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
      <CardContent>
        <Typography
          style={{
            margin: "0px",
            marginTop: "20px",
            color: "black",
            fontWeight: "600",
          }}
          variant="body3"
          color="text.primary"
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests.
        </Typography>
      </CardContent>
    </Card>
  );
}
