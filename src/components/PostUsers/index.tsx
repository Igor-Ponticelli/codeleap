import { useEffect, useState } from "react";
import { IPostItem } from "../../redux/modules/myPost/types";
import api from "../../services/api";
import { Container } from "./styles";
import edit from "../../assets/images/edit.svg";
import remove from "../../assets/images/remove.svg";

export function PostUsers() {

// http://dev.codeleap.co.uk/careers/?limit=10&offset=10

const [ post, setPost ] = useState<IPostItem[]>([]);


  useEffect(() => {
    api.get('').then(response => {
      setPost(response.data.results)
    })
  })


  return(
    <Container>
      {post.map(post => (
        <main key={post.id}>
          <div>
            <h4>{post.title}</h4>
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
            <span>@{post.username}</span>
            <span>{post.createdAt}</span>
          </div>
          <p>{post.content}</p>
        </main>
      ))}   
    </Container>
  );
}