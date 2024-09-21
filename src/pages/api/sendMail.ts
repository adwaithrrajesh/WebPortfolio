import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });
    
      const { email, subject, message } = req.body;
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.OTP_EMAIL, 
          pass: process.env.OTP_PASSWORD,
        },
      });
    
      const mailOptions = {
        from: email,
        to: "adwaithrrajesh.k@gmail.com",
        subject,
        html: `
          <div style="max-width: 600px; margin: 20px auto; padding: 20px; font-family: Arial, sans-serif; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h2 style="color: #333; font-size: 24px; margin: 0;">New Message Received</h2>
              <p style="color: #555; font-size: 16px; margin-top: 5px;">You have a new message from <strong>${email}</strong></p>
            </div>
            <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0;">${message}</p>
            </div>
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #888; font-size: 14px;">This is an automated email, please do not reply.</p>
            </div>
          </div>
        `,
      };
      
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
      } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to send email.' });
      }
}
