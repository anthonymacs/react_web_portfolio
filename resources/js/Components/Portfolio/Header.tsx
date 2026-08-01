import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'My Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Resume', href: '#resume' },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <div className="sticky top-0 z-20 backdrop-blur-md bg-white/90 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
                <a href="#" className="font-bold text-neutral-900 text-sm tracking-tight">
                    
                </a>

                <nav className="hidden lg:flex items-center gap-7 text-sm text-neutral-700">
                    {links.map((link) => (
                        <a key={link.label} href={link.href} className="hover:text-red-600 transition">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <motion.a
                    href="mailto:you@example.com"
                    className="hidden lg:inline-flex bg-red-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm"
                    whileHover={{ scale: 1.04, backgroundColor: '#dc2626' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                    Contact Us
                </motion.a>

                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                >
                    <motion.span
                        animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                        className="w-6 h-0.5 bg-neutral-900 rounded-full origin-center"
                    />
                    <motion.span
                        animate={{ opacity: open ? 0 : 1 }}
                        className="w-6 h-0.5 bg-neutral-900 rounded-full"
                    />
                    <motion.span
                        animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                        className="w-6 h-0.5 bg-neutral-900 rounded-full origin-center"
                    />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="lg:hidden overflow-hidden border-t border-neutral-200 bg-white"
                    >
                        <div className="px-5 py-4 flex flex-col gap-4 text-sm">
                            {links.map((link) => (
                                <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-neutral-700 hover:text-red-600 transition">
                                    {link.label}
                                </a>
                            ))}
                            <a href="mailto:you@example.com" onClick={() => setOpen(false)} className="inline-flex justify-center bg-red-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm">
                                Contact Us
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
}