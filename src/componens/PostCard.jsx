import { Link } from "react-router-dom";
export const PostCard = ({ post }) => {
  return (
    <article>
      <h3>
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </h3>
      <p>{post.body}</p>
    </article>
  );
};
