'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');
  
    try {
      const templateParams = {
        from_name: formData.name,     
        from_email: formData.email,   
        message: formData.message,    
        to_name: "Bilal Boukhorissa", 
      };
  
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, // Template ID
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string // Public Key
      );
  
      setResponseMessage('✅ Votre message a bien été envoyé !');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setResponseMessage('❌ Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-6 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-bold text-center text-gray-700">Contactez-nous</h3>
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleChange}
        className="p-2 border rounded text-black"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        className="p-2 border rounded text-black"
        required
      />
      <textarea
        name="message"
        placeholder="Votre message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        className="p-2 border rounded text-black"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className={`p-2 text-white rounded ${
          loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Envoi...' : 'Envoyer'}
      </button>
      {responseMessage && <p className="text-center text-gray-700">{responseMessage}</p>}
    </form>
  );
};

export default ContactForm;
