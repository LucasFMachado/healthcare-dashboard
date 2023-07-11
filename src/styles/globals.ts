import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    font-size: 16px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: #25282B;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  button[disabled] {
    opacity: 0.6;
    cursor: initial;
  }

  [disabled] {
    opacity: 0.6;
  }
`
