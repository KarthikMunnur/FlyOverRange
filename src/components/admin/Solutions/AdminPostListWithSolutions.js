import React from "react";
import Nodata from "../../Shared/Nodata";
import AdminIndividualPostSolution from "./AdminIndividualPostSolution";

const AdminPostListWithSolutions = ({ props }) => {
  if (props) {
    return (
      <div className="project-list-sec section">
        {props.map((posts, idx) => {
          if (posts) {
            return <AdminIndividualPostSolution props={posts} key={idx} />;
          }
        })}
      </div>
    );
  } else {
    return <Nodata />;
  }
};

export default AdminPostListWithSolutions;
