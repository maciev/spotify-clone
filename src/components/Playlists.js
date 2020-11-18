import React, { Component } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const Playlists = (props) => {
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: "Home playlist 1",
      img:
        "https://images.unsplash.com/photo-1605718666382-4eb9bd7e1961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      des: "Just in time for springtime",
    },
    {
      id: 102,
      category_id: 3,
      name: "Home playlist 2",
      img:
        "https://images.unsplash.com/photo-1605651707963-01c2baf9adee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      des: "Warm your boots (and mittens) up",
    },
    {
      id: 103,
      category_id: 3,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1605610185633-68c5a5a936c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      des: "Winter wonderland",
    },
    {
      id: 104,
      category_id: 1,
      name: "Focus playlist 1",
      img:
        "https://images.unsplash.com/photo-1605476607816-661cdc4151f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      des: "Last Christmas I gave you my heart",
    },
    {
      id: 105,
      category_id: 4,
      name: "Sunday playlist",
      img:
        "https://images.unsplash.com/photo-1605474231723-ab1e22c86dda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
      des: "The most favorite season of all",
    },
    {
      id: 106,
      category_id: 2,
      name: "Mood playlist 1",
      img:
        "https://images.unsplash.com/photo-1605672203282-5000c1dfd7d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80",
      des: "Sunshine and sunflowers",
    },
    {
      id: 107,
      category_id: 2,
      name: "Mood playlist 2",
      img:
        "https://images.unsplash.com/photo-1605699178552-b745afe1af1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      des: "Dark metal",
    },
  ];

  const matchedPlaylists = dataPlaylists.filter(
    (playlist) => playlist.category_id === props.category_id
  );

  return (
    <div className="cardsWrapInner">
      {matchedPlaylists.map((playlist) => (
        <div className="card">
          <div className="cardImage">
            <img src={playlist.img} alt="pic1" />
          </div>
          <div className="cardContent">
            <h3>{playlist.name}</h3>
            <span className="subTextSmall">{playlist.des}</span>
          </div>
          <span className="playIcon">
            <PlayCircleFilledIcon />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Playlists;
