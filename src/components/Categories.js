import React, { Component } from "react";
import Playlists from "./Playlists";

export class Categories extends Component {
  render() {
    const dataCategories = [
      {
        id: 1,
        name: "Focus",
        tagline: "Music to help you concentrate",
      },
      {
        id: 2,
        name: "Mood",
        tagline: "Playlist to match your mood",
      },
      {
        id: 3,
        name: "Soundtrack your home",
        tagline: "",
      },
      {
        id: 4,
        name: "Kickback this Sunday",
        tagline: "",
      },
    ];

    return (
      <div>
        {dataCategories.map((category) => (
          <div className="cardsWrap">
            <h1>{category.name}</h1>
            <span className="seeAll">SEE ALL</span>
            <p className="subText">Music to help you concentrate</p>
            <Playlists category_id={category.id} />
          </div>
        ))}
      </div>
    );
  }
}
export default Categories;
