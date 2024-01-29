import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../components/nav";
import PreviewForm from "./components/previewForm";

const ContentPreview = () => {
  const contentData = useSelector((state) =>
    state.Content.uploadedContent ? state.Content.uploadedContent : ""
  );
  return (
    <div>
      <Nav />

      <div>
        <PreviewForm content={contentData} />
      </div>
    </div>
  );
};

export default ContentPreview;
