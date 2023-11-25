import { useState, useEffect } from 'react';
import Star from '../icons/star';
import Styles from '@/styles/Animation-FlipText.module.css';

const TextReveal = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const words = ["smarter", "brighter"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={Styles.flipContainer}>
            {words.map((word, index) => (
                <span
                    key={index}
                    className={`${Styles.word} text-primary-2 ${index === currentWordIndex ? Styles.visible : ''
                        }`}
                >
                    &nbsp;{word}<Star />
                </span>
            ))}
        </div>
    );
};

export default TextReveal;
