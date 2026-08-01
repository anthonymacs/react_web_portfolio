import { motion } from 'framer-motion';

const education = [
    {
        title: 'Bachelor of Science in Information Technology',
        place: 'Eastern Visayas State University',
        period: '4 Years',
        tag: 'Degree',
    },
];

const experience = [
    {
        title: 'Full Stack Development Intern',
        place: 'EVSU Engineering Department - (May 2026 - Jun 2026)',
        description:
            'Completed a 2-month internship as a Full Stack Developer, working on real departmental projects and gaining hands-on experience across both front-end and back-end development.',
    },
    {
        title: 'Back-End & Front-End Developer (Partnered Role)',
        place: 'EVSU - (Feb 2026 - Mar 2026)',
        description:
            'Worked alongside Mr. Reymart Calicdan for 2 months, with separated back-end and front-end responsibilities, to develop two systems: the EVSU eBook Reader and the EVSU Thesis Reader.',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function ResumeCard({ title, place, period, tag, description }: {
    title: string;
    place: string;
    period?: string;
    tag?: string;
    description?: string;
}) {
    return (
        <motion.div variants={cardVariant} className="flex-1 min-w-[220px]">
            <h4 className="font-bold text-neutral-900 text-base sm:text-lg leading-snug mb-2">
                {title}
            </h4>
            <p className="text-sm text-neutral-500 mb-1">{place}</p>
            {period && <p className="text-sm text-neutral-500 mb-3">{period}</p>}
            {description && (
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">{description}</p>
            )}
            {tag && (
                <span className="inline-block bg-neutral-700 text-white text-xs font-medium px-3 py-1 rounded-md">
                    {tag}
                </span>
            )}
        </motion.div>
    );
}

export default function ResumeSection() {
    return (
        <div className="bg-red-50/40 px-5 sm:px-6 py-14 sm:py-20">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="w-4 h-4 rounded-full border-2 border-red-600 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    </span>
                    <span className="text-neutral-700 text-sm font-medium">My Resume</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900 text-center mb-10 sm:mb-14 tracking-tight">
                    4 Years of IT Education & Hands-On Experience
                </h2>

                <div className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10">
                    {/* Timeline column */}
                    <div className="relative flex flex-col items-center">
                        <div className="absolute top-2 bottom-2 w-px bg-neutral-300" />
                        <div className="relative z-10 flex flex-col items-center" style={{ marginTop: '2px' }}>
                            <span className="w-3 h-3 rounded-full bg-red-600" />
                        </div>
                        <div className="flex-1" />
                        <div className="relative z-10 flex flex-col items-center">
                            <span className="w-3 h-3 rounded-full bg-red-600" />
                        </div>
                    </div>

                    {/* Content column */}
                    <div className="flex flex-col gap-16 sm:gap-20">
                        {/* Education */}
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-6">Education</h3>
                            <motion.div
                                className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6"
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                            >
                                {education.map((item) => (
                                    <ResumeCard key={item.title} {...item} />
                                ))}
                            </motion.div>
                        </div>

                        {/* Experience */}
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-6">Experience</h3>
                            <motion.div
                                className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10"
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                            >
                                {experience.map((item) => (
                                    <ResumeCard key={item.title} {...item} />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}