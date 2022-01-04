import "./home.css";
import LeftSideBar from "./leftSidebar/leftSidebar";
import Post from "./Post/post";
import RightSideBar from "./RightSidebar/rightSideBar";
import Navbar from "./navbar/navbar";
export default function Home() {
  return (
    <div className="home-body">
      <Navbar></Navbar>
      <div className="row">
        <div className="left-sidebar">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="post">
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <div className="right-sidebar">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
}
