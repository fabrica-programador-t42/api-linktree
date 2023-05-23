const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_EMAIL, // generated ethereal user
    pass: process.env.SMTP_SENHA, // generated ethereal password
  },
});
function enviarTokenRecuperarSenha(email, token) {
  transporter.sendMail({
    from: '"Api Link - T42" carlos.pereira@provi.com.br', // sender address
    to: email, // list of receivers
    subject: "Recuperação de senha", // Subject line
    text: "Recuperar senha", // plain text body
    html: `
    <div>
        <a href="http://localhost:3000/nova-senha?token=${token}">Clique aqui para recuperar sua senha</a>
    </div>`, // html body
  }).then(re => console.log(re))
}


module.exports = {
  enviarTokenRecuperarSenha
}

