import React from 'react';


function ReadMorePost(props) {
    const post = props.props;
    return (
        <div>
        {post.desc} 
        </div>
    )
}

export default ReadMorePost
