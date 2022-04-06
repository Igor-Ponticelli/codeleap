import styled from 'styled-components';
export const Container = styled.div`
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#ddd;
  div {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.2);
    h1 {
      font-size: 2.25rem;
      color: #181818;
    }
    form {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      label {
        display: block;
        font-size: 1.125rem;
        color: #181818;
      }
      input {
        font-size: 1.125rem;
        height: 40px;
        border-radius: 8px;
        padding: 0 16px;
        background-color: #fff;
        color: #181818;
        border: 1px solid #a8a8b3;
        &::placeholder {
          color: #ccc;
        }
      }
      button {
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        height: 50px;
        border-radius: 8px;
        font-weight: 700;
        letter-spacing: 0.8px;
        background-color: #181818;
        color: #fff;
        transition: 0.2s;
        cursor: pointer;
        border: 0;
        width: 200px;
        align-self: flex-end;
        &:hover {
          background-color: #292929;
        }
      }
    }
  }
`