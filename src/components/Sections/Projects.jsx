import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Amar Rokto",
    description:
      "A full-stack blood donation platform that connects donors with recipients in real time. Users can register as donors, search for available blood groups, request urgent donations, and manage their profiles. The platform includes secure authentication, responsive UI, and optimized donor-matching features tailored for Bangladesh.",
    tech: ["Next.js", "Express", "Firebase", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/niloy-debnath/amar-rokto-client.git",
    live: "https://amar-rokto-client.vercel.app/",
    screenshot: "https://i.ibb.co.com/VWhMHtrR/screenshot-1764922155987.png",
  },
  {
    title: "EventTracker",
    description:
      "A community-driven event management platform designed to organize and promote social development activities such as tree plantations, donation drives, road cleaning, and child education programs across Bangladesh.",
    tech: ["React", "Firebase", "Tailwind CSS", "react-router"],
    github:
      "https://github.com/niloy-debnath/social-development-events-client.git",
    live: "https://musical-starship-5f1523.netlify.app/",
    screenshot: "https://i.ibb.co.com/q3z4VNQF/screenshot-1764927968611.png",
  },
  {
    title: "Game Hub",
    description:
      "A minimal website where you can get more than 50+ games and download them and the website will remember which game did you download when next time you logged in",
    tech: ["React", "Firebase", "Tailwind CSS", "react-router,daisyUI"],
    github: "https://github.com/niloy-debnath/hero-app.git",
    live: "https://classy-strudel-9f9921.netlify.app/",
    screenshot: "https://i.ibb.co.com/9fQ5fw9/screenshot-1764928788905.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-neon-blue">03.</span> Some Things I've Built
          </h2>
          <div className="w-20 h-1 bg-neon-purple rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-bg rounded-xl p-6 border border-white/5 hover:border-neon-blue/30 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="w-10 h-10 text-neon-blue" />
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed h-24 overflow-hidden">
                {project.description}
              </p>

              {project.screenshot && (
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover rounded-lg mb-6 border border-white/10"
                />
              )}

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-neon-purple"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
