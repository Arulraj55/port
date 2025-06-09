import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav 
            className="flex justify-between items-center p-4 bg-gray-800 text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <h1 className="text-xl md:text-2xl font-bold">Jerry's Portfolio</h1>
            <div className="flex space-x-4 md:space-x-6">
                <Link to="/" className="hover:text-green-400">Home</Link>
                <Link to="/about" className="hover:text-green-400">About</Link>
                <Link to="/projects" className="hover:text-green-400">Projects</Link>
                <Link to="/contact" className="hover:text-green-400">Contact</Link>
            </div>
        </motion.nav>
    );
}