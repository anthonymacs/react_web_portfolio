import { motion } from 'framer-motion';

type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
};

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
    return (
        <motion.div
            className="bg-white rounded-xl p-5 sm:p-6 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -4, borderColor: '#dc2626' }}
        >
            <h3 className="text-base sm:text-lg font-bold mb-2 text-neutral-900">{title}</h3>
            <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
            <motion.a
                href={link}
                className="inline-flex items-center gap-1 mt-4 text-red-600 font-semibold text-sm"
                whileHover={{ x: 3 }}
            >
                View Project →
            </motion.a>
        </motion.div>
    );
}