import React from "react";
import ContentForm from "./components/contentForm";
import Nav from "../../components/nav";
import "./components/contentForm.css";

const Content = () => {
  return (
    <div className="contentWrapper">
      <Nav />
      <ContentForm />
    </div>
  );
};

export default Content;
