import { FormEvent,useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "./styles";


export default function SignUp() {

  const username = useSelector(state => {
    return state
  })

  const [ user, setUser ] = useState('');

  function submitUsername(event: FormEvent) {
    event.preventDefault();
    setUser('');
    window.location.pathname = '/room';
    console.log(user);
  }


  return (
    <Container>
      <div>
        <h1>Welcome to CodeLeap Network!</h1>
        <form
            onSubmit={submitUsername}
        >
          <label>Please, enter your username</label>
          <input 
            type='text'
            name="username"
            placeholder='John Doe'
            onChange={(e) => setUser(e.target.value)}
            value={user}
           />
           <button type="submit">Enter</button>
        </form>
      </div>
    </Container>
  );
}

