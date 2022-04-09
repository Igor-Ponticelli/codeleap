import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IPostState } from "./modules/myPost/types";
import rootReducers from "./modules/rootReducers";


export interface IState {
  myPost: IPostState;
}

const store = createStore(
  rootReducers, 
  composeWithDevTools()
  );

export default store;