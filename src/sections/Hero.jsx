import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(192,132,87,0.1)_0%,_rgba(0,0,0,0)_70%)]"></div>
                {/* Simple grid or network effect simulation */}
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(192, 132, 87, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 132, 87, 0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}>
                </div>
            </div>

            <div className="container relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-8"
                >
                    {/* Logo Placeholder - Infinity Symbol */}
                    <div className="w-32 h-16 mx-auto mb-6 border-4 border-[var(--accent-copper)] rounded-full flex items-center justify-center text-4xl text-[var(--accent-copper)] opacity-80 rotate-45"
                        style={{ borderRadius: '50% 50% 0 50%' }}>
                        ∞
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                >
                    WELCOME TO THE <br />
                    <span className="text-gradient">INFINITE ERA</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-lg md:text-2xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto"
                >
                    Digitalizing Systems. Innervating Worlds.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <Button variant="outline" className="mr-0 md:mr-4 mb-4 md:mb-0">
                        Enter the System
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
