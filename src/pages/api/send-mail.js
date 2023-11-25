import nodemailer from 'nodemailer'; // Import nodemailer
import { transporter, mailOptions } from '@/config/nodemailer';

export default async function handler(req, res) {
    const { data } = JSON.parse(req.body);
    const { Email, Website } = data;
    try {
        if (!Email || !Website) {
            return res.status(400).json({ message: "Bad Request - Missing Required Fields" });
        }

        const mailContent = `
                <div>
                    <p><strong>Email:</strong> ${Email}</p>
                    <p><strong>Website:</strong> ${Website || 'N/A'}</p>
                </div>
            `;

        const updatedMailOptions = {
            ...mailOptions,
            subject: `New Form Submit - Contact Form - Footer`,
            html: mailContent
        };

        await transporter.sendMail(updatedMailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error." });
    }
}