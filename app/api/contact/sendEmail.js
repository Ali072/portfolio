import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        // Validatie van de invoer
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'Alle velden zijn verplicht.' });
        }

        try {
            // Configuratie voor de SMTP-server
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'la56341@gmail.com', // Je e-mailadres
                    pass: 'vubqS6T?E9R$wuk',    // Je wachtwoord of app-specifiek wachtwoord
                },
            });

            // E-mailgegevens
            const mailOptions = {
                from: `${name} <${email}>`, // Verzender
                to: 'la56341@gmail.com',    // Ontvanger (jijzelf)
                subject: subject,
                text: message,
            };

            // E-mail verzenden
            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: 'E-mail succesvol verzonden!' });
        } catch (error) {
            console.error('Fout bij het verzenden van de e-mail:', error);
            res.status(500).json({ message: 'E-mail verzenden mislukt.' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
