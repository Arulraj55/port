import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.section 
            className="text-center mt-20 p-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-base md:text-lg max-w-xl mx-auto">
                I am a React developer who loves creating interactive web experiences. I enjoy learning new technologies and building cool projects.
            </p>
        </motion.section>
    );
}