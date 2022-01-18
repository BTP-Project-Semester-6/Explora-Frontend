import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { style } from "@mui/system";

export default function ShowComment(props) {
  return (
    <Card style={{ boxShadow: "none" }} sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardContent>
          <Typography
            style={{ color: "#fe7e6d", fontWeight: "bold" }}
            gutterBottom
            variant="h7"
            component="div"
          >
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <b style={{ fontSize: "14px" }}>{props.commentString}</b> <br />{" "}
            {Date(props.created_at)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
