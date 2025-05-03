// app/components/ContactForm.tsx
'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponseMessage('')

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Bilal Boukhorissa',
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )

      setResponseMessage('✅ Votre message a bien été envoyé !')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error)
      setResponseMessage('❌ Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section aria-labelledby="contact-heading" className="bg-gradient-to-br from-gray-100 to-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 id="contact-heading" className="text-4xl font-bold text-[#346473] mb-4">
          Restons en contact
        </h2>
        <p className="text-lg text-gray-600">
          Une question ? Besoin d’aide ? Contactez-nous via ce formulaire, et notre équipe vous répondra
          dans les plus brefs délais.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        aria-describedby="contact-response"
        className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            id="contact-name"
            aria-label="Votre nom"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 border rounded-lg text-black focus:ring-2 focus:ring-[#A600FF] focus:outline-none"
          />
          <input
            type="email"
            name="email"
            id="contact-email"
            aria-label="Votre email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 border rounded-lg text-black focus:ring-2 focus:ring-[#A600FF] focus:outline-none"
          />
        </div>
        <textarea
          name="message"
          id="contact-message"
          aria-label="Votre message"
          placeholder="Votre message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="p-4 border rounded-lg text-black focus:ring-2 focus:ring-[#A600FF] focus:outline-none w-full"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-lg font-bold text-white transition-all ${
            loading
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#A600FF] to-[#c2e920] hover:to-[#A600FF]'
          }`}
        >
          {loading ? 'Envoi...' : 'Envoyer'}
        </button>
        {responseMessage && (
          <p
            id="contact-response"
            aria-live="polite"
            className={`text-center text-lg font-semibold ${
              responseMessage.startsWith('✅') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {responseMessage}
          </p>
        )}
      </form>
    </section>
  )
}

export default ContactForm
