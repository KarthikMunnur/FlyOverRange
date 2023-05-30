import React from "react";
import Nodata from "../../Shared/Nodata";
import ReportIndividualPost from "./ReportIndividualPost";

const ReportedPostList = (props) => {
  const { getFilterData } = props;
  if (getFilterData().length > 0) {
    return (
      <div className="project-list-sec section">
        {getFilterData().map((posts, idx) => {
          if (posts) {
              debugger;
            return <ReportIndividualPost props={posts} key={idx} />;
          }
        })}
      </div>
    );
  } else {
    return <Nodata />;
  }
};

export default ReportedPostList;
