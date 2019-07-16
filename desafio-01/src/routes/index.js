const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('It\'s works')
})

module.exports = router