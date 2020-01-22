import { createGlobalStyle } from 'styled-components'
import roboto from 'typeface-roboto'

import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  @import url(${roboto});

  * {
  margin: 0;
  padding: 0;
  outline: 0;
  font-family: 'Roboto';
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 14px 'Roboto'
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

`
