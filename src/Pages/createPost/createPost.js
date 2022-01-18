import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./createPost.css";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Navbar from "../navbar/navbar";
import { margin, style } from "@mui/system";
import { TextField } from "@mui/material";
import Toast from "../../Components/Toast/toast";
import jwt_decode from "jwt-decode";
import SPINNER from "../../img/Spinner.gif";

export default function CreatePost() {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({});

  const navigate = useNavigate();
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
          setUser(decoded);
        }
      }
    } else {
      navigate("/login");
    }
  }, []);

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
      setImage(e.target.files[0]);
      setError(false);
    } else {
      setError(true);
    }
  };

  const postData = (e) => {
    if (!error && image != "") {
      if (location != "") {
        if (description != "") {
          var fileSize = image["size"];
          if (fileSize > 2000000) {
            Toast(
              "",
              "Photo Size Exceeds , Size must be less than 2MB",
              "",
              ""
            );
            return;
          } else {
            setLoading(true);
            Toast("Image Uploading ! Plese Wait !", "", "", "");
            async function API() {
              const data = new FormData();
              data.append("file", image);
              data.append("upload_preset", "explora");
              data.append("cloud_name", "btp-sem4-cloud");
              const responce = await fetch(
                "https://api.cloudinary.com/v1_1/btp-sem4-cloud/image/upload",
                {
                  method: "post",
                  body: data,
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  Toast(
                    "Image Upload Sucessful ! Publishing Post !",
                    "",
                    "",
                    ""
                  );
                  fetch("http://localhost:3001/api/posts/newpost", {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      location: location,
                      author: user._id,
                      photoUrl: data.url,
                      description: description,
                      tag: tag,
                    }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      Toast("Post Published Successfully", "", "", "");
                      navigate("/home");
                    })
                    .catch((error) => {
                      console.log(error);
                      setLoading(false);
                      Toast("", "Failed ! Retry ?", "", "");
                    });
                })
                .catch((err) => {
                  console.log(err);
                  Toast("", "Image Upload Failed !", "", "");
                  setLoading(false);
                  return;
                });
            }
            API();
          }
        } else {
          Toast("", "Description Should be Non-empty", "", "");
        }
      } else {
        Toast("", "Location Should be Non-empty", "", "");
      }
    } else {
      Toast("", "Image Format Error", "", "");
    }
  };

  const myStyle = {
    backgroundImage: "url(/post.jpg)",
    height: "100vh",

    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="createPost-body" style={{ paddingTop: "4%" }}>
      <div className="glass-creatPost outer-box-creatPost">
        <div className="">
          <div className="row">
            <div style={{ width: "50%" }} className="container uploadbox ">
              {error && <p className="errorMsg">File not supported</p>}
              <div
                className="imgPreview"
                style={{
                  background: imgPreview
                    ? `url("${imgPreview}") no-repeat center/cover`
                    : "#fff",
                }}
              >
                {!imgPreview && (
                  <>
                    <div style={{ margin: "auto" }}>
                      <label htmlFor="fileUpload" className="customFileUpload">
                        <DriveFolderUploadIcon
                          style={{ transform: "scale(7)" }}
                        ></DriveFolderUploadIcon>
                      </label>
                      <input
                        type="file"
                        id="fileUpload"
                        onChange={handleImageChange}
                      />
                    </div>
                  </>
                )}
              </div>
              {imgPreview && (
                <>
                  <button
                    className="btn btn-outline-danger btn-lg btn-block btn-sm"
                    onClick={() => setImgPreview(null)}
                    style={{
                      border: "none",
                      width: "100%",
                      margin: "10px 0 0 0",
                    }}
                  >
                    Remove image
                  </button>
                </>
              )}
            </div>
            <div style={{ width: "50%" }}>
              <div className="col">
                <div
                  style={{ width: "90%", margin: "auto" }}
                  class="form-group"
                >
                  <label for="exampleFormControlTextarea1">
                    <b>Tag Someone</b>
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="1"
                    placeholder="Eg. @username1 @username2"
                    onChange={(e) => setTag(e.target.value)}
                  ></textarea>
                </div>

                <div
                  style={{ width: "90%", margin: "auto", marginTop: "20px" }}
                  class="form-group"
                >
                  <label for="exampleFormControlTextarea1">
                    <b>Location</b>
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="1"
                    placeholder="Eg. RedFort, New Delhi"
                    onChange={(e) => setLocation(e.target.value)}
                  ></textarea>
                </div>
                <div
                  style={{ width: "90%", margin: "auto", marginTop: "20px" }}
                  class="form-group"
                >
                  <label for="exampleFormControlTextarea1">
                    {" "}
                    <b>Discription </b>
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div
                  style={{ width: "10%", margin: "auto", marginTop: "10px" }}
                >
                  {!loading ? (
                    <button
                      type="button"
                      class="btn btn-success "
                      onClick={postData}
                    >
                      Post
                    </button>
                  ) : (
                    <div style={{ fontSize: "15px", color: "green" }}>
                      {" "}
                      <img src={SPINNER} width="80px" height="80px" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
