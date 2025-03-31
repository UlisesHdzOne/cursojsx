import React, { useContext, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { PostCard } from "../components/PostCard";
import { BlogContext } from "../contexts/blog.context";
//import { UserContext } from "../contexts/user.context";

export const BlogPage = () => {

const {posts, error, getPosts} = useContext(BlogContext);
//const { login,logout} = useContext(UserContext);


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

      {/*
      este componente lo vamos a comentar solo fue para hacer la prueba que 
      se renderizaba muchas veses sin usar useMemo en el PostCard 
      */}
      {/*       
      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button> 
      */}

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
