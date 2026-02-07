import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const Services = () => {
    const [active, setActive] = useState(0);

    const services = [
        {
            title: "AI OPTIMIZATION",
            desc: "Harnessing the power of artificial intelligence to streamline operations and predict future trends."
        },
        {
            title: "GLOBAL CONNECTIVITY",
            desc: "Seamlessly connecting systems across borders for a unified digital experience."
        },
        {
            title: "SYSTEM INTEGRATION",
            desc: "Unifying disparate technologies into a single, cohesive ecosystem."
        }
    ];

    return (
        <SectionWrapper id="services" className="bg-[#0b0b0b] min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-4 relative h-full flex flex-col md:flex-row items-center">

                {/* Header Title */}
                <div className="absolute top-10 left-0 right-0 text-center">
                    <h2 className="text-4xl md:text-5xl text-metallic font-bold">Services</h2>
                </div>

                {/* LEFT: Node Network (Image 3) */}
                <div className="relative w-full md:w-1/2 h-[500px] mt-20">

                    {/* SVG Connections */}
                    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                        {/* Connecting Lines */}
                        <line x1="30%" y1="20%" x2="20%" y2="80%" stroke="#b8734d" strokeWidth="1" opacity="0.4" />
                        <line x1="20%" y1="80%" x2="70%" y2="85%" stroke="#b8734d" strokeWidth="1" opacity="0.4" />
                        <line x1="30%" y1="20%" x2="70%" y2="85%" stroke="#b8734d" strokeWidth="1" opacity="0.4" />

                        {/* Glowing Electrical Arc Animation */}
                        <motion.path
                            d="M 100 400 L 350 425"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeDasharray="5 15"
                            animate={{ strokeDashoffset: [0, -20] }}
                            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                            opacity="0.6"
                        />
                    </svg>

                    {/* Node 1: AI (Top) - Centered roughly */}
                    <div
                        className="absolute top-[10%] left-[35%] cursor-pointer group"
                        onClick={() => setActive(0)}
                    >
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${active === 0 ? 'node-active' : 'node-inactive'}`}>
                            <span className="font-bold text-2xl text-white">AI</span>
                        </div>
                        <span className="absolute left-28 top-8 text-[#b8734d] font-bold tracking-widest uppercase whitespace-nowrap drop-shadow-md">Optimization</span>
                    </div>

                    {/* Node 2: Global (Bottom Left) */}
                    <div
                        className="absolute bottom-[20%] left-[10%] cursor-pointer group"
                        onClick={() => setActive(1)}
                    >
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${active === 1 ? 'node-active' : 'node-inactive'}`}>
                            {/* Decorative inner circle */}
                            <div className="w-12 h-12 rounded-full border border-gray-500"></div>
                        </div>
                        <span className="absolute right-24 top-6 text-white text-right text-sm font-bold tracking-widest uppercase drop-shadow-md">Global<br />Connectivity</span>
                    </div>

                    {/* Node 3: System (Bottom Right) */}
                    <div
                        className="absolute bottom-[20%] right-[30%] cursor-pointer group"
                        onClick={() => setActive(2)}
                    >
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${active === 2 ? 'node-active' : 'node-inactive'}`}>
                            <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                        </div>
                        <span className="absolute -bottom-8 left-0 text-white text-sm font-bold tracking-widest uppercase whitespace-nowrap drop-shadow-md">System<br />Integration</span>
                    </div>

                    {/* Background Loop Decor */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                        <svg width="400" height="200" viewBox="0 0 400 200">
                            <path d="M100,100 C50,100 50,50 100,50 S200,150 250,150 S350,100 300,100" fill="none" stroke="white" strokeWidth="1" />
                        </svg>
                    </div>
                </div>

                {/* RIGHT: Detail Card */}
                <div className="w-full md:w-1/2 flex justify-center p-4">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="glass-panel p-8 rounded-r-xl w-full max-w-md"
                    >
                        <h3 className="text-xl text-[#ffdab9] mb-4">
                            {services[active].title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            {services[active].desc}
                        </p>
                    </motion.div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Services;