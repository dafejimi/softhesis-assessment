"use client"
import React from "react";
import Link from "next/link";
import { Provider } from "react-redux";
import Login from "./login";
import { store } from "../redux/index";

const Home = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};
export default Home;
