require('dotenv').config()
require('./db/mongodb')
const express = require('express')
const carregarModels = require('./models/index')
const carregarRotas = require('./routes')

const app = express()
app.use(express.json())

app.get('/pedido', (req, res) => {
    return res.status(200).send({teste: '123'})
})


carregarModels()
carregarRotas(app)

app.listen(3000, ()=> {
    console.log('Api rodando...')
})


/* 
const nodemailer = require('nodemailer')
let transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_EMAIL, // generated ethereal user
      pass: process.env.SMTP_SENHA, // generated ethereal password
    },
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: '"Fred Foo 👻" carlos.pereira@provi.com.br', // sender address
    to: "admin@lambdatech.com.br", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }).then(re => console.log(re)) */