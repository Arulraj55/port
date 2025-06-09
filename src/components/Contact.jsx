import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <motion.section 
            className="text-center mt-20 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-base md:text-lg mb-2">Email: jerry@example.com</p>
            <p className="text-base md:text-lg">Phone: +1234567890</p>
        </motion.section>
    );
}