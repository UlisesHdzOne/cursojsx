import React, { useEffect, useState } from "react";
import HeaderComponent from "../componens/HeaderComponent";
import { PostCard } from "../componens/PostCard";

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    setPosts(data);
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
        <ul>{postCards}</ul>
      </section>
    </>
  );
};
