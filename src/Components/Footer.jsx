import React from 'react';
import logo from '../assets/Logo-2.png'
import {
    FaFacebookF,
    FaTwitter,
    FaGithub,
    FaLinkedinIn
} from "react-icons/fa";
import { Link } from 'react-router';


const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content popins'>
            <footer className="footer p-10 mx-auto w-11/12 flex justify-between items-start">
                {/* Company Info with Logo */}
                <aside>
                    <div className="flex items-center gap-4 mb-2">
                        <img
                            src={logo} // <-- Replace with your actual logo path
                            alt="Company Logo"
                            className="w-10 h-10 rounded"
                        />
                        <h2 className="text-2xl font-bold">Saif's App Store</h2>
                    </div>
                    <p className="text-sm max-w-xs">
                        Building reliable solutions for modern web applications.
                    </p>
                    <p className="text-xs mt-4">&copy; 2025 Saif's App Store. All rights reserved.</p>
                </aside>

                {/* Legal */}
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to="/terms" className="link link-hover">Terms of Service</Link>
                    <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
                </nav>

                {/* Developer Resources */}
                <nav>
                    <h6 className="footer-title">Developer</h6>
                    <Link to="/docs" className="link link-hover">Documentation</Link>
                    <Link to="/api" className="link link-hover">API Reference</Link>
                    <Link to="/support" className="link link-hover">Support</Link>
                </nav>

                {/* Social Media */}
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4 text-xl">
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                            <FaFacebookF />
                        </Link>
                        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                            <FaTwitter />
                        </Link>
                        <Link to="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaGithub />
                        </Link>
                        <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;