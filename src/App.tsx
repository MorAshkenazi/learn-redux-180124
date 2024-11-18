import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AllPosts from "./components/AllPosts";
import PostsTitles from "./components/PostsTitles";

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <AllPosts />
          </div>
          <div className="col-6">
            <PostsTitles />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
