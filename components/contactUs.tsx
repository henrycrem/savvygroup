import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import ContactForm from './contact-form'; // Import your contact form component

const ContactUs: React.FC = () => {
  return (
    <div className="bg-white-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-black text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Use responsive classes */}
          {/* Left Column: Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Right Column: Contact Information */}
          <div className="md:col-span-1"> {/* Use responsive classes */}
            <div className="p-4 rounded-lg mb-4 text-center w-full">
              {/* Email */}
              <div className="mb-4">
                <div className="flex items-center justify-center mb-4">
                  <label htmlFor="email" className="text-6xl font-bold text-black-500">
                    <FaEnvelope />
                  </label>
                  <div className="ml-4">
                    <p className="text-xl font-bold mb-2">Email Address</p>
                    <p className="text-gray-600">contact@example.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <div className="flex items-center justify-center mb-4">
                  <label htmlFor="phone" className="text-6xl font-bold text-blue-500 mb-4">
                    📞
                  </label>
                  <div className="ml-4">
                    <p className="text-xl font-bold mb-2">Phone number</p>
                    <p className="text-gray-600">+231-777-220-991</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mb-4">
                <div className="flex items-center justify-center mb-4">
                  <label htmlFor="address" className="text-6xl font-bold text-black mb-4">
                    🏢
                  </label>
                  <div className="ml-4">
                    <p className="text-xl font-bold mb-2">Address</p>
                    <p className="text-gray-600">Congo Town, Paynesville, Montserrado-Liberia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
