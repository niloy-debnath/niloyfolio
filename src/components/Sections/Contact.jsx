import React from "react";
import { motion } from "framer-motion";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-neon-purple">06.</span> Get In Touch
          </h2>
          <div className="w-20 h-1 bg-neon-blue rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card-bg rounded-2xl p-8 md:p-12 border border-white/5"
          >
            <div className="text-center mb-12">
              <p className="text-gray-400 text-lg mb-8">
                I'm currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I'll
                try my best to get back to you!
              </p>

              <div className="flex justify-center gap-6 mb-12">
                <a
                  href="https://github.com/niloy-debnath"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-neon-blue transition-all hover:-translate-y-1"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/-niloy-debnath-/"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-neon-blue transition-all hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-neon-blue transition-all hover:-translate-y-1"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/__niloy.debnath__/"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-neon-blue transition-all hover:-translate-y-1"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="mailto:niloydebnathofficial@gmail.com"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-neon-blue transition-all hover:-translate-y-1"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-mono text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
