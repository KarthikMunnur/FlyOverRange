import React, { useState } from "react";
import Nodata from "../Shared/Nodata";
import SinglePost from "./SinglePost";

const TrendingStoriesList = ({ props }) => {
  if (props) {
    return (
      <div className="project-list section">
        {props.slice(1, 2).map((posts, idx) => {
          if (posts) return <SinglePost props={posts} key={idx} />;
        })}
      </div>
    );
  } else {
    return <Nodata />;
  }
};

export default TrendingStoriesList;
