import React from "react";
import Nodata from "../../Shared/Nodata";
import AdminIndividualPostComment from "./AdminIndividualPostComment";

const AdminPostListWithComments = ({ props }) => {
  if (props) {
    return (
      <div className="project-list-sec section">
        {props.map((posts, idx) => {
          if (posts) {
            return <AdminIndividualPostComment props={posts} key={idx} />;
          }
        })}
      </div>
    );
  } else {
    return <Nodata />;
  }
};

export default AdminPostListWithComments;
