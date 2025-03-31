import { useParams } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import { useEffect, useState } from "react";

export const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  console.log(id);

  const fetchPost = async (postId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (!response.ok) throw new Error("Error al obtener el post");
      const data = await response.json();
      console.log(data);
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPost(id);
  }, []);

  // Evitar error al intentar acceder a post.title cuando post es null
  if (!post) return <p>Cargando...</p>;

  return (
    <>
      <HeaderComponent />
      <section>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
  
      </section>
    </>
  );
};
