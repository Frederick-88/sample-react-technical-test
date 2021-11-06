import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/global.scss";

import Home from "./pages/Home";
import Album from "./pages/Album";
import UserDetail from "./pages/UserDetail";
import Favourite from "./pages/Favourite";

import Navbar from "./components/Navbar";
import ScrollToTop from "./utilities/ScrollToTop";

const App = () => {
  const albumUrl = "https://jsonplaceholder.typicode.com/albums";
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  const photosUrl = "https://jsonplaceholder.typicode.com/photos";

  const [albumData, setAlbumData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    axios
      .get(usersUrl)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(photosUrl)
      .then((response) => {
        setPhotoData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // asynchronous method
    async function fetchAlbum() {
      try {
        const response = await axios.get(albumUrl);
        setAlbumData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAlbum();
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <ToastContainer />

        <Switch>
          <Route exact path="/">
            <Home userData={userData} albumData={albumData} />
          </Route>
          <Route exact path="/album/:id">
            <Album
              userData={userData}
              albumData={albumData}
              photoData={photoData}
            />
          </Route>
          <Route exact path="/user-detail/:id">
            <UserDetail userData={userData} albumData={albumData} />
          </Route>
          <Route exact path="/favourite">
            <Favourite albumData={albumData} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
