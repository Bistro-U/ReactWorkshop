import React from "react";
import Avartar from "./Avartar";
function formatDate(date) {
  return date.toLocaleDateString();
}
const user = {
  author: {
    name: "alberto",
    avatarUrl: "./images/alberto.png",
  }
};
function Comment(props) {
  return (
    <div>
      <div>
        <Avartar user={user.author} />
        <div>{props.author.name}</div>
      </div>
      <div>{props.text}</div>
      <div>{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
