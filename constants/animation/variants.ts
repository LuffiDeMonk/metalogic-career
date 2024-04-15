import { Variants } from "framer-motion";

export const MainAnimation: Variants = {
    initial: {
        opacity: 0,
        y: 50
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            ease: 'easeIn'
        }
    }
}