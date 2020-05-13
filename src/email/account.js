const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to:email,
    from: 'scott.strool@gmail.com',
    subject: 'Welcome to the Task Manager Service',
    text: `Welcome to the app ${name}. Enjoy using the app`
  })
}
const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to:email,
    from: 'scott.strool@gmail.com',
    subject: 'Your sevice has been cancelled.',
    text: `${name}, We have received your request to cancel your account. If you wish to create a new account, we would love to have you back anytime.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}
