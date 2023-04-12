require('dotenv').config()
require('./db/mongodb')
const express = require('express')
const carregarModels = require('./models/index')

const app = express()
app.use(express.json())

app.get('/pedido', (req, res) => {
    return res.status(200).send({teste: '123'})
})


carregarModels()

app.listen(3000, ()=> {
    console.log('Api rodando...')
})

