require('dotenv').config()
const massive = require('massive')
const express = require('express')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express()
const ctrl = require('./ctrl/controller')

app.use(express.json())


app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.createHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log(`db bruh`)
    app.listen(SERVER_PORT, () => console.log(`server activated port ${SERVER_PORT}`))
})
