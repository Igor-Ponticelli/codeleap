import { useSelector } from "react-redux";
import { Container } from "./styles";


export function SignUp() {

  const state = useSelector(state=> state);

  console.log(state);

  return (
    <Container>
      <div>
        <h1>Welcome to CodeLeap Network!</h1>
        <form>
          <label>Please, enter your username</label>
          <input 
            type='text'
            placeholder='John Doe'
           />
           <button>Enter</button>
        </form>
      </div>
    </Container>
  );
}