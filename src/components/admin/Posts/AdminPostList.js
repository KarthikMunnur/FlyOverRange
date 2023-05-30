import React from "react";
import Nodata from "../../Shared/Nodata";
import AdminIndividualPost from "./AdminIndividualPost";

const AdminPostList = (props) => {
  const { getFilterData } = props;
  if (getFilterData().length > 0) {
    return (
      <div className="project-list-sec section">
        {getFilterData().map((posts, idx) => {
          if (posts) {
            return <AdminIndividualPost props={posts} key={idx} />;
          }
        })}
      </div>
    );
  } else {
    return <Nodata />;
  }
};

export default AdminPostList;
