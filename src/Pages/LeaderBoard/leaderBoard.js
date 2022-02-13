import "./leaderBoard.scss";
import React, { useState, useEffect } from "react";

const LeaderBoard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/user/getAllUsers`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data.users);
        data.users.map((user) => {
          let like = 0;
          let comment = 0;
          user.posts.map((post) => {
            // console.log(post.postId.comments.length);
            // console.log(post.postId.likes.length);
            // console.log(post.postId.likes.length + post.postId.comments.length);
            like += post.postId.likes.length;
            comment += post.postId.comments.length;
          });
          // console.log(like + comment);
          let count = like + comment + user.badges;
          user.count = count;

          // like = 0;
          // comment = 0;
        });
        data.users.sort((a, b) => {
          return b.count - a.count;
        });

        setUsers(data.users);
      });
  }, []);
  console.log(users);

  // console.log(users);
  // users.map((user) => {
  //   let like = 0;
  //   let comment = 0;
  //   user.posts.map((post) => {
  //     // console.log(post.postId.comments.length);
  //     // console.log(post.postId.likes.length);
  //     // console.log(post.postId.likes.length + post.postId.comments.length);
  //     like += post.postId.likes.length;
  //     comment += post.postId.comments.length;
  //   });
  //   // console.log(like + comment);
  //   let count = like + comment + user.badges;
  //   user.count = count;

  //   console.log(user);
  //   like = 0;
  //   comment = 0;
  // });

  return (
    <div className="l-wrapper">
      <div className="c-header"></div>
      <div className="l-grid">
        <div className="l-grid__item l-grid__item--sticky">
          {/* <div className="c-card u-bg--light-gradient u-text--dark">
            <div className="c-card__body">
              <div className="u-display--flex u-justify--space-between">
                <div className="u-text--left">
                  <div className="u-text--small">My Rank</div>
                  <h2>3rd Place</h2>
                </div>
                <div className="u-text--right">
                  <div className="u-text--small">My Score</div>
                  <h2>24</h2>
                </div>
              </div>
            </div>
          </div> */}

          <div className="c-card">
            <div className="c-card__body">
              <div className="u-text--center" id="winner">
                <img class="c-avatar c-avatar--lg" src={`${users[0].picUrl}`} />
                <h3 class="u-mt--16">${users[0].name}</h3>
                <span class="u-text--teal u-text--small">${users[0].name}</span>
                <div className="c-card">
                  <div className="c-card__body">
                    <div className="u-text--center" id="winner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="l-grid__item">
          <div className="c-card">
            <div className="c-card__header">
              <h3>Received Kudos</h3>
              <select className="c-select">
                <option selected="selected">
                  Sunday, Feb. 23 - Sunday, Feb. 30
                </option>
              </select>
            </div>
            <div className="c-card__body">
              <ul className="c-list" id="list">
                <li className="c-list__item">
                  <div className="c-list__grid">
                    <div className="u-text--left u-text--small u-text--medium">
                      Rank
                    </div>
                    <div className="u-text--left u-text--small u-text--medium">
                      Team Member
                    </div>
                    <div className="u-text--right u-text--small u-text--medium">
                      # of Kudos
                    </div>
                  </div>

                  {users.map((element) => (
                    <div key={element._id}>
                      <div className="c-list__grid">
                        <div className="c-flag c-place u-bg--transparent"></div>
                        <div className="c-media">
                          <img
                            className="c-avatar c-media__img"
                            src={`${element.picUrl}`}
                          />
                          <div className="c-media__content">
                            <div className="c-media__title">
                              {element.username}
                            </div>
                            <a
                              className="c-media__link u-text--small"
                              href={element.picUrl}
                              target="_blank"
                            >
                              {element.name}
                            </a>
                          </div>
                        </div>
                        <div className="u-text--right c-kudos">
                          <div className="u-mt--8">
                            <strong>{element.count}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
