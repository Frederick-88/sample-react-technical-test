import React from "react";
import "../assets/styles/favourite.scss";
import FavouriteComp from "../components/FavouriteComp";

const Favourite = (props) => {
  return (
    <div className="favourite__container">
      <FavouriteComp albumData={props.albumData} />
    </div>
  );
};

export default Favourite;
