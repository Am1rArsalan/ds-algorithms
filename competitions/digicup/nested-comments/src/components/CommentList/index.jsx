import React from "react";
import classnames from "classnames";
import CommentBox from "../CommentBox";
import "./_styles.scss";

const CommentList = ({ comments }) => {
  //render comments recursively 
  //according to the parent id that each comment has 
  //and the comments array
  //if the comment has no parent id, render it as a root comment
  //if the comment has a parent id, render it as a nested comment
  //if the comment has no parent id, render it as a root comment
  //
  return (
    <div className="root-list">
      {comments.map(comment => {
        if (comment.parentId === "") {
          return (
            <div
              data-testid="comment-wrapper"
              className={classnames({
                "root-comment": false,
              })}
              key={el.id}
            >
              <CommentBox
                key={comment.id}
                comment={comment}
                comments={comments}
              />
            </div>
          );
        } else {
          return (
            <div
              data-testid="comment-wrapper"
              key={el.id}
            >
              <CommentBox
                key={comment.id}
                comment={comment}
                comments={comments}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default CommentList;
