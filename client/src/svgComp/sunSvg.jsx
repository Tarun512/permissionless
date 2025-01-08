import * as React from "react"
import { motion } from "framer-motion";
const rayStyle = {
    animation: "pulse 2s infinite ease-in-out",
    transformOrigin: "center",
  };
  
const SvgComponent = (props) => {
    const rayVariants = {
        animate: {
            scale: [1, 1.3, 1], // Expand and contract
            opacity: [0.8, 1, 0.8],
            transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            },
        },
    };
    return(
        <svg
            width={1000}
            height={1000}
            viewBox="0 0 5556 5466"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
        <ellipse cx={2778} cy={2733} rx={1090} ry={1045} fill="#E94040" />
        <motion.rect
        x={4631.33}
        y={704.043}
        width={72.788}
        height={1687.32}
        transform="rotate(41.929 4631.33 704.043)"
        fill="#D9D923"
        
        />
        <motion.rect
        x={1971.48}
        y={3414}
        width={72.788}
        height={1687.32}
        transform="rotate(41.929 1971.48 3414)"
        fill="#D9D923"
        />
        <motion.rect
        x={3578}
        y={3433.28}
        width={72.788}
        height={1687.32}
        transform="rotate(-38.466 3578 3433.28)"
        fill="#D9D923"
        />
        <motion.rect
        x={2035.77}
        y={1952.96}
        width={72.788}
        height={1687.32}
        transform="rotate(130.64 2035.77 1952.96)"
        fill="#D9D923"
        />
        <motion.rect
        x={5555.93}
        y={2715.98}
        width={72.788}
        height={1687.32}
        transform="rotate(90.5426 5555.93 2715.98)"
        fill="#D9D923"
        />
        <motion.rect
        x={1687.6}
        y={2678.01}
        width={72.788}
        height={1687.32}
        transform="rotate(90.2381 1687.6 2678.01)"
        fill="#D9D923"
        />
        <motion.rect
        x={2798.13}
        y={3778}
        width={72.788}
        height={1687.32}
        transform="rotate(0.445752 2798.13 3778)"
        fill="#D9D923"
        />
        <motion.rect
        x={2733}
        y={0.705566}
        width={72.788}
        height={1687.32}
        transform="rotate(-0.555321 2733 0.705566)"
        fill="#D9D923"
        />
    </svg>
    )
}
export default SvgComponent
