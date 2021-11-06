import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AlbumComp = (props) => {
  const { selectedAlbum, selectedUser, photoList } = props;
  const [commentList, setCommentList] = useState(["What a nice album!"]);
  const [input, setInput] = useState("");
  const [favouriteList, setFavouriteList] = useState([]);

  // -------------------------------------
  // < ----------- Computed ------------ >
  // -------------------------------------

  const imageList = () => {
    return photoList.map((photo) => {
      return (
        <div className="image-container" key={photo.id}>
          <img src={photo.url} className="image" alt="album-images" />
          <button
            type="button"
            className="favourite-button"
            onClick={() => favouritePhoto(photo)}
          >
            ❤
          </button>
        </div>
      );
    });
  };

  const creatorRoute = (id) => {
    return `/user-detail/${id}`;
  };

  // -------------------------------------
  // < ----------- Methods ------------- >
  // -------------------------------------

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const submitComment = () => {
    const newCommentList = [...commentList, input];
    setCommentList(newCommentList);
    setInput("");
  };

  const favouritePhoto = (photo) => {
    const photoList = [...favouriteList, photo];
    setFavouriteList(photoList);
    localStorage.setItem("favourite-list", JSON.stringify(photoList));

    toast.success("You've successfully favourited a photo.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
    });
  };

  useEffect(() => {
    const getFavouriteList = localStorage.getItem("favourite-list");
    // JSON.parse to handle JSON.stringify data.
    setFavouriteList(getFavouriteList ? JSON.parse(getFavouriteList) : []);
  }, []);

  return (
    <div className="album">
      <div className="album-banner">
        <h4 className="banner-title">Album of "{selectedAlbum.title}"</h4>
      </div>
      <div className="album__user-detail">
        <p className="text">Created By {selectedUser.name}</p>
        <p className="text text--email">Email: {selectedUser.email}</p>
        <Link
          to={creatorRoute(selectedUser.id)}
          className="route-button button--custom"
        >
          View Creator
        </Link>
      </div>

      <hr className="divider-line" />

      <h4 className="images-list-title">Photos:</h4>
      <div className="album__images-list">{imageList()}</div>

      <hr className="divider-line line--with-margin" />

      <div className="comment-section">
        <h4 className="title"> Comments:</h4>

        <div className="comment-list">
          {commentList.map((comment, index) => {
            return (
              <span className="comment" key={index}>
                {comment}
              </span>
            );
          })}
        </div>

        <div className="input-section">
          <input
            className="input"
            placeholder="Place your comment here ..."
            value={input}
            onChange={(event) => handleInputChange(event)}
          />
          <button type="button" className="button" onClick={submitComment}>
            Share Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlbumComp;
