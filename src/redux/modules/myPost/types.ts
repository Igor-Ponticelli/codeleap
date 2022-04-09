export interface IPostItem {
  id: number,
  title: string,
  content: string,
  username: string,
  createdAt: string,
}

export interface IPostState {
  posts: IPostItem[],
}