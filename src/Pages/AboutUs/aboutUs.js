import React, { useEffect, useState } from "react";
import "./aboutUs.scss";
const getPicture = (index) => {
  switch (index % 3) {
    case 0:
      return "https://i.pinimg.com/736x/6d/7d/b3/6d7db3a1037c8ac5b41b0ebfec293ca4.jpg";
    case 1:
      return "https://i.pinimg.com/550x/52/10/e4/5210e4858e732f40ef13e5010d52b1f4.jpg";
    case 2:
      return "https://i.pinimg.com/736x/44/08/9e/44089e56f4c65b00fffb914361f10cf4.jpg";
    default:
      break;
  }
};

const NUMBER_OF_PICTURES = 3;
export default function AboutUs() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) =>
        index == NUMBER_OF_PICTURES ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => {
      /* cleanup */
      clearInterval(timer);
    };
    /* on component render*/
  }, []);

  return (
    <div style={{ width: "100%" }} className="aboutUsDiv">
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="about">
        <div className="upper">
          <div className="logo">
            <div className="image">
              <div className="camp">
                <img
                  src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/78235/tent-clipart-md.png"
                  alt="Image"
                  id="tent"
                />
                <img
                  src="https://thumbs.gfycat.com/LinedGoldenKentrosaurus-max-1mb.gif"
                  alt="Image"
                  id="fire"
                />
              </div>
            </div>
          </div>
          <div className="info">
            <h1>WHAT IS EXPLORA?</h1>
            <p>
              Explora is a social-travel platform which unlike all other web
              apps built till date, has a unique blend of a travel website and a
              social media website making travels socially engaging and provide
              a whole new experience to the users.
              <br />
              Imagine a place where you could see and select the best places to
              travel and also post your experiences to the world and connect
              with fellow travellers with interests similar to you, compete in
              the leaderboard among all the travel enthusiasts ,find guides to
              make your trips easier and many more features. <br />
              We also intend to power the web app using Machine Learning which
              would help people find similar travel buddies based on their
              personal and social preferences which is taken through a detailed
              personality quiz.
            </p>
          </div>
        </div>
        <div className="lower">
          <div className="info" id="lower-info">
            <h1>OUR OBJECTIVES</h1>
            <p>
              <ul style={{ textAlign: "left" }}>
                <li>
                  Make travel and tourism more cost efficient by using buddy
                  system to reduce cost.
                </li>
                <li>
                  Reduce discomfort on tourist spots by helping them to pre-plan
                  their trip.
                </li>
                <li>Promote tourism with the help of social media features.</li>
                <li>
                  Provide better travel experience with help of fully custom
                  travel experience.
                </li>
                <li>
                  Help to choose better travel group with help of ML models.
                </li>
              </ul>
            </p>
          </div>
          <div className="slider" id="lower-img">
            <img src={getPicture(index)} />
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }} className="abutUsContributorsDiv">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:500,700&display=swap"
          rel="stylesheet"
        />
        <div className="aboutUsDiv">
          <div
            className="info"
            id="lower-info"
            style={{ width: "100%", textAlign: "center" }}
          >
            <h1>OUR TEAM</h1>
          </div>
        </div>
        <div class="section-team">
          <div class="container">
            <div class="row">
              {/* Start Single Person */}
              <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                  <div class="person-image">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4D03AQH4cQ_Su_axrA/profile-displayphoto-shrink_400_400/0/1632837172163?e=1650499200&v=beta&t=GQFO6-QD8uYbWL6GmnyjIKQXKq2qu4NeWDanEDXN3Ac"
                      alt=""
                    />
                    <span class="icon">
                      <i class="fa-duotone fa-1"></i>
                    </span>
                  </div>
                  <div class="person-info">
                    <h3 class="full-name">Nalin Agrawal</h3>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <span class="speciality">
                        <a
                          href="https://www.facebook.com/nalin.agrawal.12"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-facebook-square fa-2xl"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/nalinagrawal382/"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-instagram fa-2xl"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/nalin-agrawal/"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                        <a
                          href="https://twitter.com/NalinAgrawal12"
                          style={{ color: "inherit" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-twitter fa-2xl"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              {/* Start Single Person */}
              <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                  <div class="person-image">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C4E03AQHLCTgS2vliWQ/profile-displayphoto-shrink_400_400/0/1640690637725?e=1649894400&v=beta&t=3XsLS_5rNRgYEnV-Ek7oUmZNY1Vz9uRGtmDQTi63tKU"
                      alt=""
                    />
                    <span class="icon">
                      <i class="fa-solid fa-2"></i>
                    </span>
                  </div>
                  <div class="person-info">
                    <h3 class="full-name">Prerit Kumar Jha</h3>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <span class="speciality">
                        <a
                          href="https://www.facebook.com/preritkrjha"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-facebook-square fa-2xl"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/preritkrjha/"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-instagram fa-2xl"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/preritkrjha/"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                        <a
                          href="https://twitter.com/preritkrjha"
                          style={{ color: "inherit" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-twitter fa-2xl"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              {/* Start Single Person */}
              <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                  <div class="person-image">
                    <img
                      src="https://avatars.githubusercontent.com/u/70720663?s=400&u=ce0b7973b30774939c0d043528fdc30c28038404&v=4"
                      alt=""
                    />
                    <span class="icon">
                      <i class="fa-solid fa-3"></i>
                    </span>
                  </div>
                  <div class="person-info">
                    <h3 class="full-name">Himanshu Rane</h3>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <span class="speciality">
                        <a
                          href="https://www.linkedin.com/in/nalin-agrawal/"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-facebook-square fa-2xl"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/nalin-agrawal/"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-instagram fa-2xl"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/nalin-agrawal/"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/nalin-agrawal/"
                          style={{ color: "inherit" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-twitter fa-2xl"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              {/* Start Single Person */}
              <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="single-person">
                  <div class="person-image">
                    <img
                      src="https://avatars.githubusercontent.com/u/54314949?s=400&u=fd1150c358fcc31e98a98246e98bd63249c892fe&v=4"
                      alt=""
                    />
                    <span class="icon">
                      <i class="fa-solid fa-4"></i>
                    </span>
                  </div>
                  <div class="person-info">
                    <h3 class="full-name">Vijay S. C. Joshi</h3>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <span class="speciality">
                        <a
                          href="https://www.facebook.com/vijayjoshi802"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-facebook-square fa-2xl"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/vijayjoshi802/"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-instagram fa-2xl"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/vijay-joshi-80221a193/"
                          style={{ color: "inherit", paddingRight: "10px" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                        <a
                          href="https://mobile.twitter.com/vijay_joshi16"
                          style={{ color: "inherit" }}
                          target="_blank"
                        >
                          <i class="fa-brands fa-twitter fa-2xl"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
