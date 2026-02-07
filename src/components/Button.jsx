import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
    const baseStyle = "px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 relative overflow-hidden group";

    const variants = {
        primary: "text-white bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-copper)] shadow-[0_0_20px_rgba(192,132,87,0.3)] hover:shadow-[0_0_30px_rgba(192,132,87,0.5)]",
        outline: "text-white border border-[var(--accent-copper)] hover:bg-[var(--accent-copper)] hover:text-black",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            <span className="relative z-10">{children}</span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            )}
        </motion.button>
    );
};

export default Button;
