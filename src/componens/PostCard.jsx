import { Link } from "react-router-dom";
import React from "react";
//aqui usamos useMemo para evitar que se renderize el componente PostCard muchas veces
export const PostCard = React.memo( ({ post }) => {
  return (
    <article>
      <h3>
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </h3>
      <p>{post.body}</p>
    </article>
  );
});

