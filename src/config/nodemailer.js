import nodemailer from 'nodemailer'

const email = 'aditya@rankfast.co'
const pass = 'qvpmuvxlrrjlnxny'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: pass
    }
})

export const mailOptions = {
    from: email,
    to: 'pranav@rankfast.co'
}