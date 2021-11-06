import React from "react";
import AlbumCard from "./children/AlbumCard";

const UserDetailComp = (props) => {
  const { albumData, selectedUser } = props;

  const albumList = () => {
    return albumData.map((album, index) => {
      return (
        <AlbumCard
          data={album}
          user={selectedUser}
          key={index}
          noCreator={true}
        />
      );
    });
  };

  return (
    <div className="user-detail">
      <div className="user-detail__banner">
        <h4 className="banner-title">User of "{selectedUser.name}"</h4>
      </div>

      <div className="user-detail__content">
        <h4 className="title">Details:</h4>
        <ul className="detail-list">
          <li>Name: {selectedUser.name}</li>
          <li>Username: {selectedUser.username}</li>
          <li>Email: {selectedUser.email}</li>
          <li>Website: {selectedUser.website}</li>
          <li>Phone Number: {selectedUser.phone}</li>
          <li>
            Company Name: {selectedUser.company && selectedUser.company.name}
          </li>
          <li>City: {selectedUser.address && selectedUser.address.city}</li>
          <li>Street: {selectedUser.address && selectedUser.address.street}</li>
        </ul>
      </div>

      <h4 className="album-list-title">Albums:</h4>
      <div className="album-list">{albumList()}</div>
    </div>
  );
};

export default UserDetailComp;
