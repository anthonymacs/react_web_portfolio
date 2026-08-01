import { motion } from 'framer-motion';

const testimonials = [
    {
        quote:
            "Antonio D. Macasa Jr. is a reliable and hardworking Full Stack Developer. During his four-month internship, he contributed to both frontend and backend development, demonstrating strong technical skills and a willingness to learn. He consistently completed tasks with attention to detail and worked well with the team. Antonio has a positive attitude, adapts quickly to new challenges, and is committed to writing clean and efficient code. I highly recommend him to any organization looking for a motivated and dependable developer.",
        name: 'Dr. Vinyl H. Oquiño',
        role: 'Dean, School of Engineering',
        image: '/images/internship-certificate.jpg',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function TestimonialSection() {
    return (
        <motion.div
            className="max-w-5xl mx-auto px-5 sm:px-6 py-14 sm:py-20 bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-4 h-4 rounded-full border-2 border-red-600 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                </span>
                <span className="text-neutral-700 text-sm font-medium">Testimonial</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900 text-center mb-10 sm:mb-14 tracking-tight">
                Clients Feedback
            </h2>

            <motion.div
                className="flex flex-col gap-14"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {testimonials.map((t) => (
                    <motion.div
                        key={t.name}
                        variants={item}
                        className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 md:gap-12 items-center"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-neutral-200">
                            <img
                                src={t.image}
                                alt={`${t.name} presenting internship certificate`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="text-center md:text-left">
                            <p className="italic text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                                "{t.quote}"
                            </p>
                            <p className="font-bold text-neutral-900 text-sm sm:text-base">{t.name}</p>
                            <p className="text-neutral-500 text-xs sm:text-sm">{t.role}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}