import React from "react";
import SinglePost from "./SinglePost";
import TrendingStories from "./TrendingStories";
import Masonry from "react-masonry-css";
import Nodata from "../Shared/Nodata";

const breakpointColumnsObj = {
  default: 2,
  1200: 1,
};

const MyStoriesList = ({ props }) => {
  if (props) {
    return (
      <div className="project-list section">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="gallery__row"
          columnClassName="gallery__column"
        >
          {props.map((posts, idx) => {
            if (posts)
              return (
                // <Link to={"/post/" + posts.id}>

                <SinglePost props={posts} key={idx} />
                // </Link>
              );
            else {
              <TrendingStories props={posts} key={idx} />;
            }
          })}
        </Masonry>
      </div>
    );
  } else {
    return <Nodata text={"No data Available"} />;
  }
};

export default MyStoriesList;
