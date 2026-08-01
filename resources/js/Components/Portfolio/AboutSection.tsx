import { motion } from 'framer-motion';
import { useState } from 'react';

const stats = [
    { number: '10+', label: 'Completed Projects' },
    { number: '2+', label: 'Years of Experience' },
];

const skillsLeft = [
    'Full Stack Web App Development',
    'API Development & Integration',
    'Database Design',
];

const skillsRight = [
    'PHP & Laravel Development',
    'React & Inertia.js',
    'Deployments to Any Cloud',
];

export default function AboutSection() {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            className="max-w-5xl mx-auto px-5 sm:px-6 py-14 sm:py-20 bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                {/* Image column */}
                <div className="relative flex justify-center">
                    <div className="absolute inset-0 bg-red-50 rounded-[2.5rem] scale-95 -z-10" />

                    <motion.div
                        className="relative w-64 sm:w-80 md:w-full max-w-sm rounded-[2rem] overflow-hidden cursor-pointer"
                        onHoverStart={() => setHovered(true)}
                        onHoverEnd={() => setHovered(false)}
                        whileHover={{ scale: 1.03, y: -6 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        <img
                            src="/images/profile.png"
                            alt="Your Name"
                            className="w-full h-full object-cover block"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-5 pt-10 pb-5"
                        >
                            <p className="text-white text-sm font-semibold">Antonio D. Macasa Jr.</p>
                            <p className="text-white/80 text-xs mt-1 leading-relaxed">
                                Full Stack Web Developer specializing in Laravel, React, and scalable
                                business applications.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Text column */}
                <div>
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <span className="text-red-600 text-xs sm:text-sm font-semibold tracking-widest uppercase">01</span>
                        <h2 className="text-lg sm:text-xl font-bold text-neutral-900">About Me</h2>
                        <div className="h-px flex-1 bg-neutral-200" />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-5 leading-tight">
                        I can build a solution for your business
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed text-neutral-600 mb-8">
                        I'm a Full Stack Developer who enjoys building scalable, user-focused web applications from concept to deployment. I work across both frontend and backend technologies, creating clean, responsive interfaces and robust server-side solutions.

                        I'm passionate about writing maintainable code, solving real-world problems, and continuously learning new technologies. Currently, I'm expanding my expertise in cloud computing, system architecture, and modern development practices to build faster, more reliable applications.

                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-2xl sm:text-3xl font-bold text-red-600">{stat.number}</p>
                                <p className="text-xs sm:text-sm text-neutral-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {[...skillsLeft, ...skillsRight].map((skill) => (
                            <div key={skill} className="flex items-center gap-2 text-sm text-neutral-700">
                                <span className="w-4 h-4 flex-shrink-0 rounded-sm bg-red-100 text-red-600 flex items-center justify-center text-[10px] font-bold">
                                    ✓
                                </span>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}