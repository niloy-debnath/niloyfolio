import React from 'react';
import { Github, Linkedin, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between md:flex-row gap-4">
                    <div className="mb-4 md:mb-0">
                        <p className="font-mono text-sm text-gray-400">
                            © {new Date().getFullYear()} Niloy. Built with <span className="text-neon-blue">React</span> & <span className="text-neon-purple">Tailwind</span>.
                        </p>
                        <p className="font-mono text-xs text-gray-500 mt-1">
                            niloydebnathofficial@gmail.com
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/niloy-debnath" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/-niloy-debnath-/" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="https://www.instagram.com/__niloy.debnath__/" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="https://wa.me/yourphonenumber" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <MessageCircle className="h-5 w-5" />
                        </a>
                        <a href="mailto:niloydebnathofficial@gmail.com" className="text-gray-400 hover:text-neon-blue transition-colors">
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
