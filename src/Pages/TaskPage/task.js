import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTaskByID } from "../../actions/task";

export default function Task() {
  const userId = "61d1e29522cf92e8a1d62ccc";
  const { id } = useParams();
  const dispatch = useDispatch();
  dispatch(getTaskByID(id));
  const task = useSelector((state) => state.getTaskByUSerIDReducer);
  console.log(task);
  return <div></div>;
}
