import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Vérification des champs
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
    }

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Exemple avec Gmail
      auth: {
        user: process.env.EMAIL_USER, // Adresse e-mail d'envoi
        pass: process.env.EMAIL_PASS, // Mot de passe ou App Password
      },
    });

    // Contenu de l'e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER, // Adresse expéditeur
      to: process.env.EMAIL_RECEIVER, // Adresse du destinataire
      subject: 'Nouveau message de contact',
      text: `
        Vous avez reçu un nouveau message de contact :
        Nom : ${name}
        Email : ${email}
        Message : ${message}
      `,
    };

    // Envoi de l'e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Votre message a bien été envoyé.' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi de l\'e-mail.' },
      { status: 500 }
    );
  }
}
