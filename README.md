# **react-web-template-project**

### This is a template base for react projects, with:

- create-react-app
- eslint (airbnb-styles)
- prettier
- typeface-roboto

> **Recomendations:**

Use `vscode` and `yarn`, pleaaaseee!
In your `vscode`, install the extension [ESLINT](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
Don't use `../` to access files, this template includes `import from root`

Exemple:
If you need import a component in your page, do:
> components/Test.js
```js
import React from 'react'

export default () => <p>Test</p>
```
> pages/Home
```js
import React from 'react'

import Test from 'components/Test'

export default () => (
  <>
    <h1>My Home Page</h1>
    <Test />
  </>
)
```


> **How to use**

Clone this project: `git clone https://github.com/max10rogerio/react-web-template-project`

Install dependencies: `yarn install`

Run: `yarn dev`

or

Run: `yarn dev:build` to create a build production

## **Enjoy!**

