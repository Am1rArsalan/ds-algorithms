import React from "react";
import CommentList from "../CommentList/index";
import "./_styles.scss";

const CommentBox = ({ comment , hasChild , children , comments}) => {
  return (
    <> 
      <div style={{ paddingLeft : hasChild && 20 }} 
        data-testid={comment.id} className="comment-box">
      <p className="comment-box__user">
        {comment.user.firstName} {comment.user.lastName}
      </p>
      <p className="comment-box__description">{comment.info.description}</p>
    </div>
      {comments && <CommentList comments={comments} />}
    </>
  );
};

export default CommentBox;
