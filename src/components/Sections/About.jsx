import React from "react";
import { motion } from "framer-motion";
import { User, Code, Coffee } from "lucide-react";
import dp from "../../assets/avatar3.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-neon-blue">01.</span> About Me
          </h2>
          <div className="w-20 h-1 bg-neon-purple rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square max-w-sm mx-auto bg-card-bg rounded-lg overflow-hidden border border-white/10">
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-600">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={dp}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Hello! My name is Niloy and I enjoy creating things that live on
              the internet. My interest in web development started back in 2020
              when I decided to try editing custom Tumblr themes — turns out
              hacking together HTML & CSS is pretty fun!
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Fast-forward to today, and I've had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card-bg rounded-lg border border-white/5 hover:border-neon-blue/50 transition-colors">
                <Code className="text-neon-blue mb-2" />
                <h4 className="text-white font-bold">Problem Solver</h4>
                <p className="text-sm text-gray-400">
                  Turning complex issues into simple solutions
                </p>
              </div>
              <div className="p-4 bg-card-bg rounded-lg border border-white/5 hover:border-neon-purple/50 transition-colors">
                <Coffee className="text-neon-purple mb-2" />
                <h4 className="text-white font-bold">Continuous Learner</h4>
                <p className="text-sm text-gray-400">
                  Always exploring new technologies
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
