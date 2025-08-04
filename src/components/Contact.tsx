import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();    // Empêche le rechargement
    e.stopPropagation();   // Empêche tout autre événement

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_w7kc9zp",   // Service ID
        "template_ytyg5sp",  // Template ID
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        "1t5_irSjYGOfIwoA3"  // Public Key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000); // Reset message après 4s
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ouattaraabdou1517@gmail.com',
      link: 'mailto:ouattaraabdou1517@gmail.com'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+225 01 03 18 00 04',
      link: 'tel:+2250103180004'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: "Abidjan, Côte d'Ivoire",
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Travaillons Ensemble
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vous avez un projet en tête ? Discutons de la façon dont je peux vous aider à le concrétiser.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contactez-moi</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Je suis toujours ouvert aux nouvelles opportunités et aux projets intéressants.
                N'hésitez pas à me contacter pour discuter de votre prochain projet.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <h4 className="font-semibold text-white mb-2">Disponibilité</h4>
              <p className="text-gray-300 text-sm">
                Actuellement disponible pour de nouveaux projets freelance et opportunités à temps plein.
              </p>
              <div className="flex items-center mt-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Disponible maintenant</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:transform-none disabled:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>

              {/* Message succès */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <p className="text-green-400 font-semibold">
                    ✅ Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              )}

              {/* Message erreur */}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <p className="text-red-400">
                    ❌ Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
