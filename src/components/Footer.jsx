import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-[rgba(255,255,255,0.05)]">
            <div className="container flex flex-col md:flex-row justify-between items-center text-[var(--text-secondary)] text-sm">
                <div className="mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Infinira. All rights reserved.
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-[var(--accent-copper)] transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-[var(--accent-copper)] transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
