import { useState } from "react";
import { Container, FormPost } from "./styles";



const CreatePost: React.FC = () => {

  const [ content, setContent ] = useState('');
  const [ title, setTitle ] = useState('');

  function handleNewContent(){
    setContent(content);
    setTitle(title);
    console.log(content, title)
  }

  return(
    <Container className="post">
      <h3>What's on your mind?</h3>
      <FormPost>

        <label>Title</label>
        <input 
          type="text" 
          placeholder="Hello world"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Content</label>
        <textarea 
          placeholder="Content here" 
          maxLength={350}
          onChange={(e) => setContent(e.target.value)}
        />

        <button 
          type="button"
          onClick={handleNewContent}
        >
          Create
        </button>
      </FormPost>
    </Container>
  );
}

export default CreatePost;