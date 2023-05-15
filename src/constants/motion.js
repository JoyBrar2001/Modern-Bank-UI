import { easeInOut, motion } from "framer-motion"

export const fadeIn = (direction, delayTime = 0) => {
    return {
        hidden:{
            opacity: 0,
            x: direction==='left'? -100: direction==='right'? 100: 0,
            y: direction==='up'? -100: direction==='down'? 100: 0,
        },
        show:{
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration : 0.5,
                delay: delayTime,
                ease: 'easeInOut',
            },
        },
    }
}