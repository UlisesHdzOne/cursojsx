import React, { useContext, useEffect } from "react";
import HeaderComponent from "../componens/HeaderComponent";
import { PostCard } from "../componens/PostCard";
import { BlogContext } from "../contexts/blog.context";

export const BlogPage = () => {

const {posts, error, getPosts} = useContext(BlogContext);

  useEffect(() => {
    getPosts();
  }, []);

  const postCards = posts.map((post) => {
    return (
      <li key={post.id}>
        <PostCard post={post}></PostCard>
      </li>
    );
  });

  return (
    <>
      <HeaderComponent />
      <div>BlogPage</div> 
      <section>
        {error ? (
          <h1>Error al obtener los posts</h1>
        ) : postCards.length ? (
          <ul>{postCards}</ul>
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </>
  );
};
