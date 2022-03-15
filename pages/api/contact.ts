import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  })
  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'felopatermelika@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>
      `,
    })
    console.log('Message Sent', emailRes.messageId)
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(req.body)
}
