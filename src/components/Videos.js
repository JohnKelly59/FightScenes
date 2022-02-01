import React from "react";

function Videos(props) {
  return (
    <div>
      <iframe
        key={props.id}
        width="560"
        height="315"
        src={props.links}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default Videos;
