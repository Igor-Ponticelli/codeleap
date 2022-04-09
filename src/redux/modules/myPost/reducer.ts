import { Reducer } from "redux";
import produce from 'immer';
import { IPostState } from "./types";

const INITIAL_STATE: IPostState = {
  posts: [],
}

const myPost: Reducer<IPostState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {

      case 'ADD_MY_NEW_POST_TO_ROOM' : {
        
        draft.posts.push({
          id: Math.random(),
          title: action.type,
          content: action.type,
          username: action.type,
          createdAt: action.type,
        });

        break;
      }

      default: {
        return draft;
      }
    }
  });
}

export default myPost;