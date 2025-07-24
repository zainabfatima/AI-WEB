// pages/api/send-consultation.js
import { Resend } from 'resend';

const resend = new Resend("");

export async function formSubmission(formData) {
    const { name, email, message } = formData;

    try {
        await resend.emails.send({
            from: "zainab.ned2@gmail.com", // Must be verified in Resend
            to: ["zainab.ned2@gmail.com"],
            subject: `New Consultation Request from ${name}`,
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });
        console.log("Email sent successfully");
    } catch (err) {
        console.error("Resend error:", err);
    }
}



// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     const { data, error } = await resend.emails.send({
//         from: 'Acme <onboarding@resend.dev>',
//         to: ['delivered@resend.dev'],
//         subject: 'Hello world',
//         react: EmailTemplate({ firstName: 'John' }),
//     });

//     if (error) {
//         return res.status(400).json(error);
//     }

//     res.status(200).json(data);
// };