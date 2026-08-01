import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const keyPositions = [140, 152, 164, 176, 188, 200, 212, 224, 236, 248];

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-white px-5 sm:px-6 pt-20 sm:pt-24 pb-16 sm:pb-24 border-b border-neutral-200">
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />
            <motion.div
                className="absolute top-0 right-0 w-[500px] sm:w-[700px] h-[350px] sm:h-[500px] bg-red-500/10 rounded-full blur-3xl"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
                {/* Left: text */}
                <motion.div variants={container} initial="hidden" animate="show" className="text-center lg:text-left">
                    <motion.p
                        variants={item}
                        className="text-red-600 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
                    >
                        I'm glad you're here.
                    </motion.p>

                    <motion.h1
                        variants={item}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-tight"
                    >
                        Hi 👋 I'm Antonio D. Macasa Jr.
                    </motion.h1>

                    <motion.h2
                        variants={item}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 tracking-tight leading-tight mt-2"
                    >
                        Building Practical Web Applications with Modern Technologies
                    </motion.h2>

                    <motion.p
                        variants={item}
                        className="text-sm sm:text-base mt-5 max-w-xl mx-auto lg:mx-0 leading-relaxed text-neutral-600"
                    >
                        A Full Stack Web Developer passionate about creating reliable, user-friendly,
                        and maintainable web applications. I primarily work with PHP, Laravel, React,
                        Livewire, and Vite, building solutions that are both functional and scalable.
                    </motion.p>

                    <motion.p
                        variants={item}
                        className="text-sm sm:text-base mt-4 max-w-xl mx-auto lg:mx-0 leading-relaxed text-neutral-600"
                    >
                        I enjoy turning ideas into real-world applications by developing clean back-end
                        systems, responsive front-end interfaces, and seamless user experiences. Whether
                        it's creating business management tools, web portals, or custom applications, I
                        focus on writing organized, maintainable code and continuously improving my skills.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center mt-8"
                    >
                        <motion.a
                            href="/cv.pdf"
                            download
                            className="w-full sm:w-auto bg-red-600 text-white px-7 py-3 rounded-md font-semibold text-sm"
                            whileHover={{ scale: 1.04, backgroundColor: '#dc2626' }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                            Download My CV
                        </motion.a>
                        <motion.a
                            href="mailto:you@example.com"
                            className="w-full sm:w-auto border border-neutral-300 text-neutral-800 px-7 py-3 rounded-md font-semibold text-sm"
                            whileHover={{ scale: 1.04, borderColor: '#a3a3a3', backgroundColor: 'rgba(0,0,0,0.02)' }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right: waving programmer illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    className="relative w-full max-w-md sm:max-w-lg mx-auto"
                >
                    <motion.svg
                        viewBox="0 0 400 420"
                        className="w-full h-auto"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <rect x="55" y="345" width="290" height="14" rx="4" fill="#e5e5e5" />
                        <rect x="75" y="359" width="10" height="45" fill="#d4d4d4" />
                        <rect x="315" y="359" width="10" height="45" fill="#d4d4d4" />

                        <rect x="165" y="245" width="70" height="105" rx="12" fill="#f5f5f5" stroke="#e5e5e5" strokeWidth="2" />

                        <rect x="190" y="178" width="20" height="34" fill="#c48a5a" />
                        <rect x="160" y="208" width="80" height="80" rx="18" fill="#dc2626" />

                        {/* laptop lid: styled like a gaming laptop */}
                        <rect x="153" y="245" width="94" height="74" rx="6" fill="#1a1a1a" />
                        <rect x="153" y="245" width="94" height="6" fill="#0d0d0d" />
                        <rect x="160" y="252" width="18" height="2" rx="1" fill="#000" opacity="0.4" />
                        <rect x="160" y="257" width="14" height="2" rx="1" fill="#000" opacity="0.3" />
                        <rect x="222" y="252" width="18" height="2" rx="1" fill="#000" opacity="0.4" />
                        <rect x="226" y="257" width="14" height="2" rx="1" fill="#000" opacity="0.3" />
                        <g transform="translate(200, 282)">
                            <polygon points="0,-16 16,0 0,16 -16,0" fill="none" stroke="#dc2626" strokeWidth="1.5" />
                            <polygon points="0,-8 8,0 0,8 -8,0" fill="#dc2626" />
                            <motion.circle
                                cx="0"
                                cy="0"
                                r="2.5"
                                fill="#ff4444"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </g>
                        <rect x="158" y="313" width="84" height="2" rx="1" fill="#dc2626" opacity="0.5" />

                        <polygon points="138,319 262,319 278,338 122,338" fill="#404040" />
                        <polygon points="150,323 250,323 262,333 138,333" fill="#5a5a5a" />
                        {keyPositions.map((x) => (
                            <rect key={x} x={x} y="325" width="8" height="5" rx="1" fill="#787878" />
                        ))}
                        {keyPositions.slice(1, 9).map((x) => (
                            <rect key={`k2-${x}`} x={x} y="332" width="8" height="4" rx="1" fill="#787878" />
                        ))}

                        <motion.g
                            style={{ transformOrigin: '240px 220px' }}
                            animate={{ rotate: [0, 24, 0] }}
                            transition={{ duration: 1.1, repeat: Infinity, repeatDelay: 1.7, ease: 'easeInOut' }}
                        >
                            <rect x="233" y="165" width="15" height="58" rx="7" fill="#dc2626" />
                            <circle cx="240" cy="160" r="11" fill="#c48a5a" />
                        </motion.g>

                        <motion.g
                            animate={{ opacity: [0, 0, 1, 1, 0], y: [0, 0, -4, -4, -8] }}
                            transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.15, 0.3, 0.65, 1], ease: 'easeInOut' }}
                        >
                            <rect x="268" y="118" width="48" height="30" rx="8" fill="#fee2e2" />
                            <polygon points="278,148 288,148 278,158" fill="#fee2e2" />
                            <text x="292" y="138" textAnchor="middle" fontSize="14" fontFamily="sans-serif" fontWeight="600" fill="#dc2626">Hi!</text>
                        </motion.g>

                        <circle cx="166" cy="152" r="6" fill="#c48a5a" />
                        <circle cx="234" cy="152" r="6" fill="#c48a5a" />
                        <circle cx="200" cy="150" r="34" fill="#c48a5a" />

                        <path
                            d="M167 148 C167 106 181 92 200 92 C219 92 233 106 233 148 C233 128 220 116 200 116 C180 116 167 128 167 148 Z"
                            fill="#181818"
                        />
                        <path d="M166 148 C165 138 167 128 172 120" fill="none" stroke="#181818" strokeWidth="10" strokeLinecap="round" />
                        <path d="M234 148 C235 138 233 128 228 120" fill="none" stroke="#181818" strokeWidth="10" strokeLinecap="round" />

                        <rect x="180" y="140" width="15" height="3" rx="1.5" fill="#181818" />
                        <rect x="205" y="140" width="15" height="3" rx="1.5" fill="#181818" />
                        <circle cx="187" cy="152" r="3.2" fill="#181818" />
                        <circle cx="213" cy="152" r="3.2" fill="#181818" />
                        <path d="M198 155 Q196 163 200 165" fill="none" stroke="#a3703f" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M187 171 Q200 178 213 171" fill="none" stroke="#7a4a25" strokeWidth="2" strokeLinecap="round" />

                        <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                            <rect x="55" y="90" width="54" height="27" rx="6" fill="#fee2e2" />
                            <text x="82" y="108" textAnchor="middle" fontSize="13" fontFamily="monospace" fill="#dc2626">{'</>'}</text>
                        </motion.g>
                        <motion.g animate={{ y: [0, -9, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}>
                            <circle cx="72" cy="230" r="15" fill="#fee2e2" />
                            <text x="72" y="235" textAnchor="middle" fontSize="13" fontFamily="monospace" fill="#dc2626">JS</text>
                        </motion.g>
                    </motion.svg>
                </motion.div>
            </div>
        </div>
    );
}