import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1.5rem;
  padding: 2rem;
  border: 1px solid #cccccc;
  border-radius: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        transition: filter 0.15s;
        &:hover {
          filter: brightness(0);
        }
      }
    }
    h4 {
      color: #181818;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
    }
    span {
      display: block;
      color: #ccc;
      margin: 1.25rem 0 2.5rem;
      font-family: 'Roboto', sans-serif;
      font-size: 1.125rem;
      line-height: 1.8rem;
    }
    p {
      color: #181818;
      font-family: 'Roboto', sans-serif;
      font-size: 1.125rem;
      line-height: 1.8rem;
    }
  }
`