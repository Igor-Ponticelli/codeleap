import { CreatePost } from "../../components/CreatePost";
import { PostUsers } from "../../components/PostUsers";
import { Container } from "./styles"
 
 
export function Room(){

  return(
      <Container>
        <div className="bg">
          <h2 className="room">CodeLeap Network</h2>
        </div>
        <div className="room">
          <CreatePost />
          <PostUsers />
        </div>
      </Container>
  );
}
