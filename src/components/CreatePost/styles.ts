import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  border: 1px solid #cccccc;
  border-radius: 8px;
  margin-bottom: 6rem;
  h3 {
    color: #181818;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
  }
`


export const FormPost = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  
  label {
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
    color: #181818;
  }
  input {
    font-family: 'Roboto', sans-serif;
    font-family: 1.125rem;
    height: 40px;
    border-radius: 8px;
    padding: 10px 16px;
    background: #fff;
    color: #181818;
    border: 1px solid #a8a8b3;
    &::placeholder{
      font-family: 'Roboto', sans-serif;
      color: #CCCCCC;
    }
  }

  textarea {
    font-family: 'Roboto', sans-serif;
    font-family: 1rem;
    line-height: 1.4rem;
    min-width: 100%;
    max-width: 100%;
    min-height: 140px;
    border-radius: 8px;
    padding: 10px 16px;
    background: #fff;
    color: #181818;
    border: 1px solid #a8a8b3;
    resize: none;
    &::placeholder{
      font-family: 'Roboto', sans-serif;
      color: #CCCCCC;
    }
  }
  button {
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  height: 50px;
  border-radius: 8px;
  font-weight: 700;
  letter-spacing: 0.8px;
  background: #181818;
  color: #fff;
  transition: 0.2s;
  cursor: pointer;
  border: 0;
  width: 200px;
  align-self: flex-end;
  &:hover {
    background-color: #282828;
    }
  }
`