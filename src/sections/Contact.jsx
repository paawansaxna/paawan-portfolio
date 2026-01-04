"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_8nfoc9z",
        "template_wg8toad",
        {
          from_name: formData.name,
          to_name: "Paawan",
          from_email: formData.email,
          to_email: "jec.paawansaxena@gmail.com",
          message: formData.message,
        },
        "oXTeIhWuL-PGtxDQY"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      showAlertMessage("danger", "Something went wrong! Please try again.");
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 c-space">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={150}
        ease={80}
        color={"#ffffff"} 
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-4">
        
        {/* LEFT SIDE: TEXT & INFO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Let&apos;s <span className="text-purple-500">Connect.</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
            Whether you&apos;re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I&apos;m here to help.
          </p>
          
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                 <span className="text-white">✉️</span>
              </div>
              <p className="text-neutral-300">jec.paawansaxena@gmail.com</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: THE FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Decorative Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          
          <div className="relative p-8 md:p-10 border border-white/10 rounded-2xl bg-neutral-950/80 backdrop-blur-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  placeholder="Curious, Impressed, or need help?
Let's talk."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full py-4 bg-white text-black font-bold rounded-lg overflow-hidden transition-all active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <span className="relative z-10">
                  {isLoading ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;