import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    propertyType: "Villa",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="contact-section bg-gray-300 py-12"
      id="contact"
      style={{
        backgroundImage: `url('https://i.1.creatium.io/b1/9e/44/f66619d028d7d2c2ab11a1d9b16c031414/2000x760q5/footer.jpg')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="title-div">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            <motion.h3
              ref={ref}
              className="text-2xl md:text-3xl font-bold mb-6 text-center z-20 text-white"
              initial={{ opacity: 0, x: -100 }} // Starting point of the animation
              animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate only when in view
              transition={{ duration: 1, delay: 0.5 }} // Delay the subtitle animation slightly
            >
              Begin Your Journey to Luxury Living
            </motion.h3>
          </h2>
          <p className="mb-8 text-md md:text-lg text-white">
            <motion.h3
              ref={ref}
              className="text-center z-20 text-white"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Let us guide you to your new home at Rashid Yachts & Marina.
              Whether you're seeking an elegant apartment or a private villa,
              our team is ready to assist you with every detail.
            </motion.h3>
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg w-full max-w-lg mx-auto">
          <div className="bg-yellow-100 text-yellow-800 text-sm font-semibold p-4 mb-4 rounded-md">
            Get Exclusive Pre-Launch Discounts – Limited Units Available!
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="block text-left text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-left text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-left text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div>
              <label
                htmlFor="propertyType"
                className="block text-left text-gray-700"
              >
                Preferred Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-left text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-2 resize-none"
                placeholder="Include any specific questions or inquiries"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Contact Us Now
            </button>
          </form>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f fa-2x w-6 h-6 md:w-8 md:h-8 text-blue-600"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-2x w-6 h-6 md:w-8 md:h-8 text-pink-500"></i>
              </a>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp fa-2x w-6 h-6 md:w-8 md:h-8  text-green-500"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
