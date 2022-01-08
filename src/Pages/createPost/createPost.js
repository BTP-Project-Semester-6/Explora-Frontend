import { useRef, useState, useEffect } from "react";
import "./createPost.css";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import Navbar from "../navbar/navbar";
import { margin, style } from "@mui/system";
import { TextField } from "@mui/material";
export default function CreatePost() {
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
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
    <div style={myStyle} className="createPost-body">
      <Navbar></Navbar>
      <div className="glass outer-box-creatPost">
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
                  ></textarea>
                </div>
                <div
                  style={{ width: "10%", margin: "auto", marginTop: "10px" }}
                >
                  <button type="button" class="btn btn-success ">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
