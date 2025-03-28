import { createContext, useState } from "react";

const BlogContext = createContext();

const BlogProviderWrapper = (props) => {

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
  return (
    <BlogContext.Provider value={{ posts,error , getPosts }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export {BlogContext, BlogProviderWrapper };
 