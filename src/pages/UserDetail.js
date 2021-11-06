import React from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/userDetail.scss";
import UserDetailComp from "../components/UserDetailComp";

const UserDetail = (props) => {
  const { id } = useParams();
  const selectedUser =
    props.userData.find((user) => `${user.id}` === `${id}`) || {}; // avoid warning in react to use === rather than ==
  const albumData =
    props.albumData.filter((album) => album.userId === selectedUser.id) || {};

  return (
    <div className="user-detail__container">
      <UserDetailComp albumData={albumData} selectedUser={selectedUser} />
    </div>
  );
};

export default UserDetail;
