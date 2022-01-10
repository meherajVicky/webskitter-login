import React from "react";
import MainNav from "./MainNav";
import "./layout.css";

export default function Layout(props) {
  return (
    <>
      <MainNav />
      <div className="main">{props.children}</div>
    </>
  );
}
