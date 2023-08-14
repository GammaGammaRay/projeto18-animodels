import { styled } from "styled-components"

export const Form = styled.div`
  width: 80%;
  height: fit-content;
  input {
    font-weight: 200;
    letter-spacing: 0.025em;
  }
  button {
    font-weight: 400;
    letter-spacing: 0.1em;
  }

  textarea {
    font-size: 20px;
    width: calc(100% - 30px);
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding: 15px;
    margin: 1px;
    :focus {
      border: 2px solid #ffb6b6;
      margin: 0px;
    }
  }
  margin-bottom: 20px;
`
