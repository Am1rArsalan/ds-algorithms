import React from "react";
import CommentList from "./components/CommentList";

const App = ({ comments }) => {
  return <CommentList comments={comments} />;
};

export default App;
