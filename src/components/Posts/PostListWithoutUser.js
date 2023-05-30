import React from "react";
import SinglePost from "./SinglePost";
import TrendingStories from "./TrendingStories";
import Masonry from "react-masonry-css";
import Nodata from "../Shared/Nodata";
import firebase from "firebase";

const breakpointColumnsObj = {
  default: 2,
  991: 1,
};

const PostListWithoutUser = (props) => {
  const { getFilterData } = props;
  if (getFilterData().length > 0) {
    return (
      <div className="project-list section">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="gallery__row"
          columnClassName="gallery__column"
        >
          {getFilterData().map((posts, idx) => {
            if (posts){
              return (
                <SinglePost props={posts} key={idx} />
              );
            }else {
              <TrendingStories props={posts} key={idx} />;
            }
          })}
        </Masonry>
      </div>
    );
  } else {
    return <Nodata />;
  }
};

export default PostListWithoutUser;
