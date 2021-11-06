import React from "react";
import sample from "../../assets/images/album-banner.jpg";
import { Link } from "react-router-dom";

const AlbumCard = (props) => {
  const { data, user, noCreator } = props;

  const albumRoute = (id) => {
    return `/album/${id}`;
  };

  const creatorRoute = (id) => {
    return `/user-detail/${id}`;
  };

  return (
    <div className="album-card__container">
      <div className="album-card">
        <div className="album-content">
          <img className="image" src={sample} alt="album" />
          <h4 className="title">{data.title}</h4>
          <p className="text">Created by {user.name}</p>
        </div>

        <div className="button-list">
          <Link to={albumRoute(data.id)} className="route-button">
            View Album
          </Link>

          {!noCreator && (
            <Link to={creatorRoute(data.userId)} className="route-button">
              View Creator
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
