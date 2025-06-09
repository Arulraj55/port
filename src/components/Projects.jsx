import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.section 
            className="text-center mt-20 p-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">My Projects</h2>
            <ul className="space-y-2 text-base md:text-lg">
                <li>🎨 Portfolio Website</li>
                <li>📱 Mobile App Design</li>
                <li>💻 E-commerce Platform</li>
            </ul>
        </motion.section>
    );
}