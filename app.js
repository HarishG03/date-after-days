const addDays = require('date-fns/addDays')
const express = require('express')
const app = express()
app.get('/', (request, response) => {
  let date = new Date()
  let finalDays = addDays(date, 100)
  response.send(
    `${finalDays.getDate()}/${finalDays.getMonth()}/${finalDays.getFullYear()}`,
  )
})
module.exports = app
