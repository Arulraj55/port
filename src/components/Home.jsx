import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.section 
            className="text-center mt-20 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-3xl md:text-5xl text-green-500 font-bold">Hello, I'm Jerry 👋</h1>
            <p className="text-lg md:text-xl mt-4">A passionate web developer building beautiful websites.</p>
        </motion.section>
    );
}