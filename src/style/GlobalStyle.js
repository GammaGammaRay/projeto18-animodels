import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
body{
    background-color: #d7d7d7;
}
input::-webkit-input-placeholder {
  font-family: inherit; 
  font-size: inherit;
}
    button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #adc857;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        width: 100%;
        padding: 12px;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
        color: white;
    }
    input {
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
    
    input::placeholder {
        font-weight: 100;
        font-style: italic;
        color: #cfcfcfff;
    }
    textarea::placeholder {
        font-weight: 100;
        font-style: italic;
        color: #cfcfcfff;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: white;
        text-decoration: none;
        padding-top: 30px;
    }
    
`

export default GlobalStyle
