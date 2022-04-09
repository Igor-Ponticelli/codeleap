import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Room from "./pages/Room";
import SignUp from "./pages/SignUp";
import store from "./redux/store";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </Router>
        <GlobalStyle/>
      </Provider>
    </>
  );
}