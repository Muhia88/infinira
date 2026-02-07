import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-[#080808]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Innervating <br />
                        <span className="text-gradient">The World.</span>
                    </h2>
                    <div className="h-1 w-20 bg-[var(--accent-copper)] mb-8"></div>
                    <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
                        At Infinira, we don't just build systems; we breathe life into them. We are the bridge between the digital and the physical, the present and the infinite future.
                    </p>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                        Our mission is to digitalize complex ecosystems, creating seamless integration that empowers businesses to operate at the speed of thought.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] rounded-2xl overflow-hidden glass flex items-center justify-center p-8"
                >
                    {/* Abstract representation of "Innervation" */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(192,132,87,0.1)] to-transparent"></div>
                    <div className="text-[var(--accent-copper)] text-9xl font-bold opacity-20 select-none">
                        ∞
                    </div>
                    <div className="absolute inset-0 border border-[rgba(255,255,255,0.1)] rounded-2xl"></div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default About;
