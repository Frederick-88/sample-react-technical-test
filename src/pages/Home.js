import React from "react";
import "../assets/styles/home.scss";
import HomeComp from "../components/HomeComp";

const Home = (props) => {
  return (
    <div className="home__container">
      <HomeComp albumData={props.albumData} userData={props.userData} />
    </div>
  );
};

export default Home;
