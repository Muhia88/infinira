import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Settings } from 'lucide-react';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-[#101010] relative overflow-hidden py-24">

            {/* Top Labels */}
            <div className="container mx-auto px-4 mb-16 flex justify-between items-center text-lg md:text-2xl font-heading tracking-widest uppercase">
                <span className="text-gray-600">Limited</span>
                <span className="text-metallic font-bold">The Infinite Era</span>
                <span className="text-[#b8734d]">Infinite</span>
            </div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative">

                {/* 1. Left Side: Grey Gears (Limited) */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start relative z-10 mb-10 md:mb-0">
                    <div className="relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="text-[#333] drop-shadow-md"
                        >
                            <Settings size={200} strokeWidth={0.5} fill="#4a4a4a" />
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-8 -right-8 text-[#2a2a2a] drop-shadow-md"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                            <Settings size={140} strokeWidth={0.5} fill="#2a2a2a" />
                        </motion.div>
                        {/* Circuit lines behind grey gears */}
                        <svg className="absolute -left-20 top-0 w-64 h-64 -z-10 opacity-20">
                            <path d="M0,50 L50,50 L80,100" fill="none" stroke="white" strokeWidth="2" />
                            <path d="M0,150 L40,150 L60,100" fill="none" stroke="white" strokeWidth="2" />
                        </svg>
                    </div>
                </div>

                {/* 2. Center: Text Content */}
                <div className="w-full md:w-1/3 text-center z-20 px-4">
                    <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                        We don't just improve; we innervate. <br />
                        We take finite systems and open them to <span className="text-copper font-medium">infinite possibilities</span>.
                    </p>
                    <div className="mt-6 text-[#b8734d] font-heading text-xl">
                        Efficiency without a ceiling.
                    </div>
                </div>

                {/* 3. Right Side: Golden Gears (Infinite) */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-end relative z-10 mt-10 md:mt-0">
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-[#b8734d] blur-[60px] opacity-20 rounded-full"></div>

                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="text-[#ffdab9] drop-shadow-[0_0_15px_rgba(184,115,77,0.6)]"
                        >
                            <Settings size={200} strokeWidth={0.5} fill="url(#gearGrad)" />
                        </motion.div>
                        <motion.div
                            className="absolute -top-8 -left-8 text-[#b8734d] drop-shadow-[0_0_10px_rgba(184,115,77,0.4)]"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                            <Settings size={140} strokeWidth={0.5} fill="#b8734d" />
                        </motion.div>

                        {/* Connecting Particles */}
                        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                            <div className="absolute top-10 right-0 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                            <div className="absolute bottom-10 left-10 w-1 h-1 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* The "Wave" connecting them (SVG Background) */}
                <svg className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 z-0 pointer-events-none opacity-60 mix-blend-screen">
                    <defs>
                        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#333" stopOpacity="0" />
                            <stop offset="50%" stopColor="#b8734d" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#ffdab9" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffdab9" />
                            <stop offset="50%" stopColor="#b8734d" />
                            <stop offset="100%" stopColor="#8c5235" />
                        </linearGradient>
                    </defs>
                    {/* Wavy lines representing transformation */}
                    <path
                        d="M0,100 C300,100 400,20 600,80 S1000,150 1400,50"
                        fill="none"
                        stroke="url(#waveGrad)"
                        strokeWidth="3"
                    />
                    <path
                        d="M0,120 C300,120 400,40 600,100 S1000,170 1400,70"
                        fill="none"
                        stroke="url(#waveGrad)"
                        strokeWidth="1"
                        opacity="0.5"
                    />
                </svg>

            </div>
        </SectionWrapper>
    );
};

export default About;