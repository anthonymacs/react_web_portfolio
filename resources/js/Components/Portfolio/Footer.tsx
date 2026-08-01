import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.div
            className="text-center p-8 sm:p-10 border-t border-neutral-200 text-neutral-500 text-xs sm:text-sm bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            © {new Date().getFullYear()} Antonio D. Macasa Jr.. Built with Laravel + Inertia + React.
        </motion.div>
    );
}