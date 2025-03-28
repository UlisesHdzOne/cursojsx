import React, { useEffect, useState } from "react";
import HeaderComponent from "../componens/HeaderComponent";
import { PostCard } from "../componens/PostCard";

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Error al obtener el post");
      const data = await response.json();
      console.log(data);
      setPosts(data);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

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
