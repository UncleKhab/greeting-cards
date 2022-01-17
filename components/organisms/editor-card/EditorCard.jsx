import React, { useState } from 'react'
import styles from './EditorCard.module.css'
import {motion} from 'framer-motion'
const variantsCover = {
    open: {
        rotateY: -180,
    },
    closed: {
        rotateY: 0
    }
}

const variantsFirstInside = {
    open: {
        rotateY: 0,
    },
    closed: {
        rotateY: 180,
    }
    
}

const cardVariants ={
    single: {
        scale: 1,
    },
    double: {
        scale: 0.7
    }
}
const EditorCard = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSingle, setIsSingle] = useState(true);

    const handleOpen = () => {
        setIsOpen(prevState => !prevState)
        setIsSingle(prevState => !prevState)
    }
    return (
        <motion.div className={`${styles.card} bg-white mt-16 relative`} variants={cardVariants} animate={isSingle ? 'single': 'double'}>  
            <motion.div className={`${styles.frontCover} w-full h-full absolute top-0 left-0`} style={{originX: 0}} animate={isOpen ? "open" : "closed"} variants={variantsCover} onClick={handleOpen}>
                <img src="/assets/images/card-cover2.png" className='w-full h-full' />
                <motion.div className={`${styles.firstInside} absolute w-full flex-1 h-full bg-white top-0 left-0`} animate={isOpen ? "open" : "closed"} variants={variantsFirstInside}>
                 First Page
                </motion.div>
            </motion.div>
            
        </motion.div>
    )
}

export default EditorCard
