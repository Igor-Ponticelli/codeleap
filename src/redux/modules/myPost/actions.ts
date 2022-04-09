import { IPostItem } from "./types";


export function addMyNewPostToRoom(post: IPostItem) {
  return {
    type: 'ADD_MY_NEW_POST_TO_ROOM',
    payload: {
      post,
    }
  }
}