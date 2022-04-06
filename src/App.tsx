import { Room } from './pages/Room/index';
// import { SignUp } from './pages/SignUp/index';
import { GlobalStyle } from './styles/global';
// import store from './redux/store';
import { Provider } from 'react-redux';

export function App() {
  return (
    // <Provider store={store}>
    <>
      {/* <SignUp /> */}
      <Room />
      <GlobalStyle />
  {/* </Provider> */}
    </>
  );
}