import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { Code, Layout, Smartphone, Database } from "lucide-react";

const services = [
    {
        title: "Web Development",
        icon: Code,
        description:
            "Building fast, responsive, and scalable web applications using modern technologies like React, Next.js, and Node.js.",
        color: "#00f3ff",
    },
    {
        title: "UI/UX Design",
        icon: Layout,
        description:
            "Creating intuitive and visually appealing user interfaces that provide exceptional user experiences.",
        color: "#bc13fe",
    },
];

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-80 w-full rounded-xl bg-gradient-to-br from-white/10 to-white/0 p-[1px] group"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-card-bg shadow-lg p-6"
            >
                <div
                    className="flex flex-col items-center gap-4 text-center"
                    style={{ transform: "translateZ(50px)" }}
                >
                    <div
                        className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300"
                        style={{ color: service.color }}
                    >
                        <service.icon size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        {service.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-20 bg-dark-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="text-neon-blue">04.</span> What I Do
                    </h2>
                    <div className="w-20 h-1 bg-neon-purple rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
