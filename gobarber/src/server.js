/* eslint no-console: 0 */
import dotenv from 'dotenv'

import './config/yup.locale.pt-br.js'
import app from './app'

dotenv.config()

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log('Server runing on PORT: ', PORT)
})
