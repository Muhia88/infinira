import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Network, Cpu, Globe, Zap } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Cpu size={40} />,
            title: 'AI Optimization',
            description: 'Harnessing the power of artificial intelligence to streamline operations and predict future trends.'
        },
        {
            icon: <Globe size={40} />,
            title: 'Global Connectivity',
            description: 'Seamlessly connecting systems across borders for a unified digital experience.'
        },
        {
            icon: <Network size={40} />,
            title: 'System Integration',
            description: 'Unifying disparate technologies into a single, cohesive ecosystem.'
        }
    ];

    return (
        <SectionWrapper id="services" className="bg-[#0b0b0b]">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Our <span className="text-gradient">Services</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-copper)] mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="glass p-8 rounded-2xl border-t border-[rgba(255,255,255,0.05)] hover:border-[var(--accent-copper)] transition-all duration-300 group"
                    >
                        <div className="mb-6 text-[var(--accent-copper)] group-hover:scale-110 transition-transform duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--accent-gold)] transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Services;
