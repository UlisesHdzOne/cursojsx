import React from "react";

export const PostCard = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  );
};
