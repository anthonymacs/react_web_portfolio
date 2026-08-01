import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const skills = [
    { name: 'TypeScript', color: '#3178c6', letter: 'TS' },
    { name: 'React', color: '#61dafb', letter: '⚛' },
    { name: 'Laravel', color: '#ff2d20', letter: 'L' },
    { name: 'Inertia.js', color: '#9553e9', letter: 'I' },
    { name: 'Tailwind CSS', color: '#38bdf8', letter: 'TW' },
    { name: 'PHP', color: '#777bb4', letter: 'PHP' },
    { name: 'MySQL', color: '#00758f', letter: 'DB' },
    { name: 'Node.js', color: '#68a063', letter: 'JS' },
    { name: 'Git', color: '#f05032', letter: 'Git' },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.06 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 8 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const DOT_COUNT = 3;

export default function SkillsList() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeDot, setActiveDot] = useState(0);

    const scrollToDot = (index: number) => {
        const el = scrollRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        const target = (maxScroll / (DOT_COUNT - 1)) * index;
        el.scrollTo({ left: target, behavior: 'smooth' });
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const handleScroll = () => {
            const maxScroll = el.scrollWidth - el.clientWidth;
            if (maxScroll <= 0) return;
            const progress = el.scrollLeft / maxScroll;
            const dot = Math.round(progress * (DOT_COUNT - 1));
            setActiveDot(dot);
        };
        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            className="max-w-5xl mx-auto px-5 sm:px-6 py-14 sm:py-20 bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center gap-3 mb-2 justify-center">
                <span className="text-red-600 text-xs sm:text-sm font-semibold tracking-widest uppercase">Skills</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 text-center mb-8 sm:mb-10 tracking-tight">
                My Skills
            </h2>

            <motion.div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {skills.map((skill) => (
                    <motion.div
                        key={skill.name}
                        variants={cardVariant}
                        whileHover={{ y: -6, borderColor: '#dc2626' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="flex-shrink-0 w-32 snap-start bg-white border border-neutral-200 rounded-xl shadow-sm px-4 py-6 flex flex-col items-center gap-3"
                    >
                        <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold"
                            style={{ backgroundColor: `${skill.color}1A`, color: skill.color }}
                        >
                            {skill.letter}
                        </div>
                        <p className="text-sm font-medium text-neutral-700 text-center">{skill.name}</p>
                    </motion.div>
                ))}
            </motion.div>

            <div className="flex justify-center gap-1.5 mt-6">
                {Array.from({ length: DOT_COUNT }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToDot(i)}
                        aria-label={`Go to section ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                            i === activeDot ? 'w-6 bg-neutral-900' : 'w-3 bg-neutral-300'
                        }`}
                    />
                ))}
            </div>
        </motion.div>
    );
}