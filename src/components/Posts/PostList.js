import React from "react";
import SinglePost from "./SinglePost";
import { Link } from "react-router-dom";
import TrendingStories from "./TrendingStories";
import Masonry from "react-masonry-css";
import Nodata from "../Shared/Nodata";

const breakpointColumnsObj = {
  default: 2,
  991: 1,
};

const PostList = (props) => {
  if (props.props.length > 0) {
    return (
      <div className="project-list section">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="gallery__row"
          columnClassName="gallery__column"
        >
          {props.props.map((post, idx) => {
            
            if (post) {
              let postedBy, index;

              if (props.users) {
                for(index = 0; index < props.users.length; index++) {
                  const element = props.users[index];
                  if (element.userid === post.postUserId) {
                    console.log(element);
                    postedBy = element;
                    return (<SinglePost props={post} user={postedBy} key={idx}/>);
                  }
                }
              }

              
            }
            else {
              return (<TrendingStories props={post}  key={idx}/>);
            }
          })}
        </Masonry>
      </div>
    );
  } else {
    return <Nodata />;
  }
};

export default PostList;
