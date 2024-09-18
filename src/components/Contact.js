import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS service
        emailjs.send(
            'service_t4fko5k',   // Replace with your EmailJS service ID
            'template_moo0ozq',   // Replace with your EmailJS template ID
            formData,             // Form data (name, email, message)
            'DLAeZ1zzbUIKTvQwC'        // Replace with your EmailJS public user key
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatusMessage('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        })
        .catch((err) => {
            console.error('FAILED...', err);
            setStatusMessage('Failed to send your message. Please try again later.');
        });
    };

    return (

        <section id="contact" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-lg mb-4">For any questions or inquiries, feel free to reach out to us. We're here to help!</p>
                    <p className="text-lg mb-2">Email: support@exambook.com</p>
                    <p className="text-lg mb-2">Phone: +234 800 123 456</p>
                </div>
                    {/* Right Column - Contact Form */}
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-indigo-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                    {statusMessage && <p className="text-center mt-4 text-lg">{statusMessage}</p>}
                </div>
            </div>
        </section>
    );
};

export default Contact;
