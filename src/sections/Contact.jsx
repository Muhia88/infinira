import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="relative">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Ready to <span className="text-gradient">Innervate</span>?
                </h2>
                <p className="text-xl text-[var(--text-secondary)] mb-12">
                    Join us in the infinite era of digital transformation. Let's build the future together.
                </p>

                <form className="max-w-md mx-auto space-y-6">
                    <div className="glass p-1 rounded-full flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent border-none outline-none text-white px-6 py-3 w-full"
                        />
                        <Button className="rounded-full">
                            Connect
                        </Button>
                    </div>
                </form>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
