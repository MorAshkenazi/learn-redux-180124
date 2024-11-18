import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./PostsState";

const reducer = combineReducers({ postsState: postsReducer });
// const reducer = combineReducers({postsState: postsReducer, usersState: usersReducer})
const store = configureStore({ reducer });

export default store;
