import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Header from '@/Components/Portfolio/Header';
import Hero from '@/Components/Portfolio/Hero';
import AboutSection from '@/Components/Portfolio/AboutSection';
import SkillsList from '@/Components/Portfolio/SkillsList';
import ResumeSection from '@/Components/Portfolio/ResumeSection';
import TestimonialSection from '@/Components/Portfolio/TestimonialSection';
import ProjectCard from '@/Components/Portfolio/ProjectCard';
import Footer from '@/Components/Portfolio/Footer';

type Project = {
    title: string;
    description: string;
    link: string;
};

const projects: Project[] = [
    { title: 'Project One', description: 'A short description of what this project does and the problem it solves.', link: '#' },
    { title: 'Project Two', description: 'Another project summary — tech stack, your role, and the outcome.', link: '#' },
    { title: 'Project Three', description: 'Highlight the impact or a key technical challenge you solved.', link: '#' },
];

const gridContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const gridItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Portfolio() {
    return (
        <>
            <Head title="Portfolio" />
            <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased">
                <Header />

                <div id="home"><Hero /></div>

                <div id="about"><AboutSection /></div>
                <div id="skills"><SkillsList /></div>

                <motion.div
                    id="projects"
                    className="max-w-3xl mx-auto px-5 sm:px-6 py-14 sm:py-20 bg-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="flex items-center gap-3 mb-6 sm:mb-8">
                        <span className="text-red-600 text-xs sm:text-sm font-semibold tracking-widest uppercase">03</span>
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">Projects</h2>
                        <div className="h-px flex-1 bg-neutral-200" />
                    </div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 sm:gap-5"
                        variants={gridContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-50px' }}
                    >
                        {projects.map((project) => (
                            <motion.div key={project.title} variants={gridItem}>
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <div id="resume"><ResumeSection /></div>

                <div id="testimonials"><TestimonialSection /></div>

                <Footer />
            </div>
        </>
    );
}