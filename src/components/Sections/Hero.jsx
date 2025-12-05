import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-scroll";
import dp from "../../assets/avatar.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue/20 via-dark-bg to-dark-bg opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-neon-purple/20 via-dark-bg to-dark-bg opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-neon-blue font-mono mb-4 text-lg">
              Hi, my name is Niloy Debnath
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Niloy<span className="text-neon-purple">.</span>
            </h1>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
              I build things for the web.
            </h3>
            <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed">
              I'm a <span className="text-neon-blue">MERN Stack Developer</span>{" "}
              & <span className="text-neon-purple">Problem Solver</span>{" "}
              specializing in building (and occasionally designing) exceptional
              digital experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="projects" smooth={true} duration={500}>
                <button className="px-8 py-4 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 rounded-md font-mono transition-all duration-300 flex items-center gap-2 group">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a
                href="https://drive.google.com/uc?export=download&id=14qOrYRdgrl5KgiN_XyjvFsiD_9evvqIh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-neon-purple/10 border border-neon-purple text-neon-purple hover:bg-neon-purple/20 rounded-md font-mono transition-all duration-300 flex items-center gap-2"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative z-10 w-full h-full glass rounded-2xl  border border-white/10 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={dp}
                  alt=""
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
