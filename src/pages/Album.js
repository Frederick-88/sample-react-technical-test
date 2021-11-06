import React from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/album.scss";
import AlbumComp from "../components/AlbumComp";

const Album = (props) => {
  const { id } = useParams();
  const selectedAlbum =
    props.albumData.find((album) => `${album.id}` === `${id}`) || {}; // avoid warning in react to use === rather than ==
  const selectedUser =
    props.userData.find((user) => user.id === selectedAlbum.userId) || {};
  const albumPhotos = props.photoData.filter(
    (photo) => photo.albumId === selectedAlbum.id
  );

  return (
    <div className="album__container">
      <AlbumComp
        selectedAlbum={selectedAlbum}
        selectedUser={selectedUser}
        photoList={albumPhotos}
      />
    </div>
  );
};

export default Album;
