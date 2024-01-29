import React from "react";

import "./contentPreview.css";

const PreviewForm = ({ content }) => {
  function getDate(createdAt) {
    var date = new Date(createdAt);

    return date.toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div className="previewWrapper relative py-2 z-20">
      <div className="previewBlock w-full lg:max-w-lg md:max-w-lg max-w-xs">
        <div className=" text-2xl px-10 pb-8 mb-4">
          Your content is uploaded!
        </div>
        <div>
          <div className="flex   p-2 my-2">
            <div className="w-2/6 text-left">Title</div>
            <div className=" text-left">{content.title}</div>
          </div>
          <div className="flex  p-2 my-2">
            <div className="w-2/6 text-left ">Description</div>
            <div className="text-left">{content.description}</div>
          </div>
          <div className="flex   p-2 my-2 ">
            <div className="w-2/6 text-left ">Link to Content</div>
            <a
              href={content.linkToContent}
              className="w-4/6 text-left text-nowrap text-ellipsis overflow-hidden"
            >
              {content.linkToContent}
            </a>
          </div>
          <div className="flex  p-2 my-2">
            <div className="w-2/6 text-left ">Uploaded on</div>
            <div className="text-left">{getDate(content.createdAt)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewForm;
