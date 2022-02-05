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
import { useEffect } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";

import ShowComment from "../comment/showComment";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
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

export default function Post(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [inp, setInp] = React.useState("");
  const [liked, isLiked] = React.useState(false);

  // console.log(props);

  const handleSubmit = () => {
    fetch("http://localhost:3001/api/posts/newcomment", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: inp,
        postId: props._id,
        userId: jwt_decode(localStorage.getItem("token"))._id,
        username: jwt_decode(localStorage.getItem("token")).name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Comment Published");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLike = () => {
    if (!liked) {
      fetch("http://localhost:3001/api/posts/likepost", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId: props._id,
          userId: jwt_decode(localStorage.getItem("token"))._id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Liked");
          window.location.reload(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const userID = jwt_decode(localStorage.getItem("token"))._id;
    props.likes.forEach((element) => {
      if (element.userId === userID) {
        isLiked(true);
      }
    });
  }, []);
  var str = Date(props.created_at);
  let date = JSON.stringify(str);
  date = date.slice(1, 4) + ", " + date.slice(4, 11);

  console.log(date);

  return (
    <Card
      style={{
        marginBottom: "3%",
        marginTop: "3%",
        borderRadius: "2%",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            alt="Remy Sharp"
            src={props.author.picUrl}
          ></Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        //title={jwt_decode(localStorage.getItem("token")).name}
        title={props.author.name}
        subheader={props.location + " - " + date}
        titleTypographyProps={{
          variant: "h5",
          fontWeight: 600,
          color: "#fe7e6d",
        }}
        subheaderTypographyProps={{ variant: "h6", fontWeight: 600 }}
      />
      <CardMedia
        component="img"
        style={{
          margin: "auto",
          borderRadius: "10px",
          height: "inherit",
          width: "600px",
        }}
        src={props.photoUrl}
      />
      <CardContent>
        <Typography
          style={{ margin: "0px", color: "black", fontWeight: "600" }}
          variant="body3"
          color="text.primary"
        >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {!liked ? (
            <FavoriteIcon onClick={handleLike} />
          ) : (
            <FavoriteIcon onClick={handleLike} style={{ color: "red" }} />
          )}
        </IconButton>
        {props.likes.length} Like
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
          <div>
            <div style={{ margin: "auto" }} className="row ">
              <div className="col-8">
                <input
                  style={{ margin: "auto", width: "100%", float: "right" }}
                  class="form-control input-field"
                  type="text"
                  placeholder="Comment Here..."
                  onChange={(e) => setInp(e.target.value)}
                  readonly
                />
              </div>
              <div style={{ margin: "auto", float: "left" }} className="col-4">
                <Button
                  style={{ float: "left" }}
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={handleSubmit}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
          <div className="show-comment-section">
            <CardContent>
              {props.comments &&
                props.comments
                  .sort((a, b) => Date(a.created_at) - Date(b.created_at))
                  .map((comment) => (
                    <div>
                      <ShowComment {...comment} />
                    </div>
                  ))}
            </CardContent>
          </div>
        </div>
      </Collapse>
      <div style={{ height: "30px" }}></div>
    </Card>
  );
}
