import { useState } from "react";
import { Container, FormPost } from "./styles";

export function CreatePost() {

  const [ newTitlePost, setNewTitlePost ] = useState('');
  const [ newContentPost, setNewContentPost ] = useState('');

  function handleCreateNewPost(){
    console.log(newTitlePost, newContentPost)
  }

  return(
    <Container className="post">
      <h3>What's on your mind?</h3>
      <FormPost>
        <label>Title</label>
        <input 
          type="text" 
          placeholder="Hello world"
          onChange={(e) => setNewTitlePost(e.target.value)}
          value={newTitlePost}
        />
        <label>Content</label>
        <textarea 
          placeholder="Content here" 
          maxLength={350}
          onChange={(e) => setNewContentPost(e.target.value)}
          value={newContentPost}
          ></textarea>
        <button 
          type="button"
          onClick={handleCreateNewPost}
        >
          Create
        </button>
      </FormPost>
    </Container>
  );
}