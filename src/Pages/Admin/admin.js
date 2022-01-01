import React, { useState } from "react";
import "./admin.scss";

export default function Admin() {
  console.log("ADMIN PANEL");
  console.log("-----------");

  const [Panel, setPanel] = useState("STATISTICS");

  const Heading = (props) => {
    return (
      <>
        <section class="panel important" style={{ textAlign: "center" }}>
          <b>
            <p style={{ margin: "10px", color: "#dd4a4b", fontSize: "30px" }}>
              {props.data}
              {props.data == "CHALLENGES" && (
                <div>
                  {" "}
                  <button
                    className="btn first"
                    style={{
                      transform: "translateY(-100%)",
                      color: "#2F4F4F",
                      float: "right",
                    }}
                  >
                    + Create
                  </button>
                </div>
              )}
            </p>
          </b>
        </section>
      </>
    );
  };

  const FeedbackCard = (props) => {
    return (
      <>
        <div
          style={{
            margin: "50px",
            // border: "2px solid gray",
            padding: "10px",
            color: "black",
            boxShadow:
              "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
          }}
        >
          <p>
            <b>Heading: Issue Name Here</b>
          </p>
          <hr />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </>
    );
  };

  const Body = (props) => {
    return (
      <>
        <section
          class="panel important"
          style={{
            textAlign: "center",
            height: "600px",
            width: "96%",
            overflow: "auto",
          }}
        >
          {props.data == "SUGGESTIONS" && (
            <>
              <section>
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
              </section>
            </>
          )}
          {props.data == "CHALLENGES" && (
            <>
              <div style={{ margin: "auto" }}></div>
            </>
          )}
        </section>
      </>
    );
  };

  return (
    <>
      <header role="banner">
        <b>
          <span>
            <h2>Admin Panel</h2>
          </span>
          <ul class="utilities">
            <br />
            <li class="users">
              <a href="#">My Account</a>
            </li>
            <li class="logout warn">
              <a href="#" style={{ color: "#dd4a4b" }}>
                Log Out
              </a>
            </li>
          </ul>
        </b>
      </header>

      <nav role="navigation">
        <ul class="main">
          <li class="dashboard">
            <a href="#" onClick={() => setPanel("STATISTICS")}>
              Dashboard
            </a>
          </li>
          <li class="edit">
            <a href="#" onClick={() => setPanel("CHALLENGES")}>
              Challanges
            </a>
          </li>
          <li class="write">
            <a href="#" onClick={() => setPanel("SUGGESTIONS")}>
              Feedbacks
            </a>
          </li>
        </ul>
      </nav>

      <main role="main">
        <Heading data={Panel} />
        <Body data={Panel} />
      </main>
    </>
  );
}
