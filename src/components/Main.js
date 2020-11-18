import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
function Main() {
  return (
    <div className="main">
      <div className="upperNav">dummy tests</div>
      <div className="mainContent">
        <div className="cardsWrap">
          <h1>Uniquely yours</h1>
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="pic1"
              />
            </div>
            <div className="cardContent">
              <h3>Liked Songs</h3>
            </div>
            <span className="playIcon">
              <PlayCircleFilledIcon />
            </span>
          </div>
        </div>
        <div className="cardsWrap">
          <h1>Focus</h1>
          <span className="seeAll">SEE ALL</span>
          <p className="subText">Music to help you concentrate</p>
          <div className="cardsWrapInner">
            <div className="card">
              <div className="cardImage">
                <img
                  src="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="pic1"
                />
              </div>
              <div className="cardContent">
                <h3>Music for Concentration</h3>
                <span className="subTextSmall">
                  Minimalism, electronica and modern classical to concentrate
                  to.
                </span>
              </div>
              <span className="playIcon">
                <PlayCircleFilledIcon />
              </span>
            </div>
            <div className="card">
              <div className="cardImage">
                <img
                  src="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="pic1"
                />
              </div>
              <div className="cardContent">
                <h3>Music for Concentration</h3>
                <span className="subTextSmall">
                  Minimalism, electronica and modern classical to concentrate
                  to.
                </span>
                <span className="playIcon">
                  <PlayCircleFilledIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
