import { useEffect, useState } from "react";
import edit from "../../assets/images/edit.svg";
import remove from "../../assets/images/remove.svg";
import { IPost } from "../../redux/reducer/types";
import api from "../../services/api";
import { Container } from "./styles";

export function PostUsers() {


  const [ post, setPost ] = useState<IPost[]>([]);

  useEffect(() => {
    api.get('posts').then(response => {
      setPost(response.data);
    })
  }, []);

  return(
    <>
      {post.map(product => (
        <Container>
          <div key={product.id}>
            <h4>{product.title}</h4>
            <ul>
              <button type="button">
                <img src={remove} alt="Remove" />
              </button>
              <button type="button">
                <img src={edit} alt="Edit" />
              </button>
            </ul>
          </div>
          <div>
            <span>{product.username}</span>
            <span>{product.createdAt}</span>
          </div>
          <p>{product.content}</p>
        </Container>
      ))}
    </>
  );
}