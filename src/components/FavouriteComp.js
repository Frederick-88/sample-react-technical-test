import React, { useState, useEffect } from "react";

const FavouriteComp = (props) => {
  const [favouriteList, setFavouriteList] = useState([]);

  const getAlbumName = (albumId) => {
    const selectedAlbum = props.albumData.find((album) => album.id === albumId);
    return selectedAlbum ? selectedAlbum.title : "";
  };

  const imageList = () => {
    if (!favouriteList.length) {
      return (
        <h4 className="empty-text">Currently, you have no any favourites.</h4>
      );
    } else {
      return favouriteList.map((photo) => {
        return (
          <div className="image-container" key={photo.id}>
            <img src={photo.url} className="image" alt="album-images" />
            <span className="album-tag">
              From "{getAlbumName(photo.albumId)}" album
            </span>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    const getFavouriteList = localStorage.getItem("favourite-list");
    // JSON.parse to handle JSON.stringify data.
    setFavouriteList(getFavouriteList ? JSON.parse(getFavouriteList) : []);
  }, []);

  return (
    <div className="favourite">
      <div className="favourite-banner">
        <h4 className="banner-title">Favourited Photos</h4>
      </div>

      <h4 className="favourite-list-title">Photos:</h4>
      <div className="favourite__images-list">{imageList()}</div>
    </div>
  );
};

export default FavouriteComp;
