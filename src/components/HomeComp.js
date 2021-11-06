import React, { useState } from "react";
import AlbumCard from "./children/AlbumCard";

const HomeComp = (props) => {
  const [albumQuery, setAlbumQuery] = useState("");
  const [usernameQuery, setUsernameQuery] = useState("");

  // -------------------------------------
  // < ----------- Computed ------------ >
  // -------------------------------------

  const formattedAlbumData = () => {
    props.albumData.forEach((album) => {
      const findUser = props.userData.find((user) => user.id === album.userId);
      const selectedUser = findUser || {};
      album.userDetail = selectedUser;
    });

    const filteredData = props.albumData.filter((album) => {
      const matchAlbumQuery = album.title
        .toLowerCase()
        .includes(albumQuery.toLowerCase());

      const matchUsernameQuery = album.userDetail.name
        .toLowerCase()
        .includes(usernameQuery.toLowerCase());

      if (matchAlbumQuery && matchUsernameQuery) {
        return true;
      }
      return false;
    });

    return filteredData;
  };

  const albumList = () => {
    return formattedAlbumData().map((album, index) => {
      return <AlbumCard data={album} user={album.userDetail} key={index} />;
    });
  };

  // -------------------------------------
  // < ----------- Methods ------------- >
  // -------------------------------------

  const onChangeAlbumInput = (event) => {
    setAlbumQuery(event.target.value);
  };

  const onChangeUsernameInput = (event) => {
    setUsernameQuery(event.target.value);
  };

  return (
    <div className="home">
      <div className="home-banner">
        <h4 className="banner-title">Photo Album React App</h4>
      </div>

      <div className="search-section">
        <div className="search-container">
          <p className="label">Search by Album Name</p>
          <input
            className="search-input"
            placeholder="Album name query here"
            onChange={(event) => onChangeAlbumInput(event)}
          />
        </div>
        <div className="search-container">
          <p className="label">Search by Username</p>
          <input
            className="search-input"
            placeholder="Creator / username query here"
            onChange={(event) => onChangeUsernameInput(event)}
          />
        </div>
      </div>

      <div className="home-content">{albumList()}</div>
    </div>
  );
};

export default HomeComp;
