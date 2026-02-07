import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/hero-infinira.mp4';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">

            {/* 1. Background Video */}
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div> {/* Overlay for readability */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* 2. Content Container */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-5xl mt-10">

                {/* Main Typography */}
                <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-2 w-full"
                >
                    <span className="text-metallic">WELCOME TO THE INFINITE ERA</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-gray-300 text-lg md:text-2xl font-light tracking-wide mb-12 drop-shadow-lg"
                >
                    Digitalizing Systems. Innervating Worlds.
                </motion.p>

                {/* Buttons Container */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col md:flex-row gap-6 mb-16"
                >
                    <button className="btn-outline px-8 py-3 uppercase text-sm md:text-base tracking-widest hover:bg-[rgba(184,115,77,0.2)]">
                        Enter the System
                    </button>

                    <button className="px-8 py-3 uppercase text-sm md:text-base tracking-widest font-heading font-bold text-black bg-gradient-to-r from-[#eebb90] to-[#b8734d] rounded-full hover:shadow-[0_0_20px_rgba(184,115,77,0.6)] hover:scale-105 transition-all duration-300">
                        Book a Demo
                    </button>
                </motion.div>

                {/* 3. The 3D Infinite Logo */}
                <motion.div
                    initial={{ opacity: 0, rotateX: 30, scale: 0.8 }}
                    animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="w-full max-w-[500px] aspect-[2/1] relative"
                >
                    {/* Recreating the metallic infinity loop using SVG */}
                    <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-2xl filter drop-shadow-[0_0_30px_rgba(184,115,77,0.3)]">
                        <defs>
                            <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#fff0e0" />
                                <stop offset="20%" stopColor="#b8734d" />
                                <stop offset="50%" stopColor="#5e3020" />
                                <stop offset="80%" stopColor="#b8734d" />
                                <stop offset="100%" stopColor="#fff0e0" />
                            </linearGradient>
                        </defs>

                        {/* The Thick Metallic Band */}
                        <path
                            d="M50,70 C20,70 10,20 50,20 C80,20 120,80 150,80 C190,80 180,30 150,30 C120,30 80,90 50,90 Z"
                            stroke="url(#metalGrad)"
                            strokeWidth="15"
                            fill="none"
                            strokeLinecap="round"
                            style={{ filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.8))' }}
                        />

                        {/* The Circuit Lines Overlay */}
                        <g opacity="0.9">
                            <circle cx="160" cy="30" r="2" fill="#fff" />
                            <path d="M160,30 L170,25" stroke="#b8734d" strokeWidth="1" />
                            <circle cx="170" cy="25" r="1.5" fill="#fff" />

                            <circle cx="140" cy="35" r="2" fill="#fff" />
                            <path d="M140,35 L130,40" stroke="#b8734d" strokeWidth="1" />

                            {/* More technological dots */}
                            <circle cx="40" cy="75" r="1.5" fill="#eebb90" />
                            <path d="M50,70 L40,75" stroke="#b8734d" strokeWidth="0.5" />
                        </g>
                    </svg>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;