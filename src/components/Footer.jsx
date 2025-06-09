import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer 
            className="bg-gray-800 text-white text-center p-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <p className="text-sm md:text-base">© 2025 Jerry's Portfolio. All rights reserved.</p>
        </motion.footer>
    );
}