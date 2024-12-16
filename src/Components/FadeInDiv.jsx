import React from 'react'
import { motion } from 'framer-motion'
const FadeInDiv = ({ classes, delay, element }) => {
    let classesSt = classes + ' relative' || 'relative'

    let delaySt = delay || 0

    return (
        <motion.div
            className={classesSt}
            initial={{ opacity: 0, top: '40px' }}
            whileInView={{ opacity: 1, top: '0px', transition: { duration: 1.5, delay: delaySt } }}
            viewport={{ once: true }}
        >
            {element}
        </motion.div>
    )
}

export default FadeInDiv