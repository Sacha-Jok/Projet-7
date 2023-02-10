import { useState } from 'react';
import arrow from '../../assets/images/downArrow.svg';
import styles from "./styles.module.scss";

const Dropdown = ({title, text}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className={styles.__details} open={isOpen} onToggle={() => setIsOpen(!isOpen)}>
        <summary className={styles.__title}>
            {title}
            <img id='arrow' src={arrow} alt="Arrow" style={{
                transform: `rotate(${isOpen ? -180 : 0}deg)`,
                transition: "transform 0.5s ease"
                }} 
            />
        </summary>
        <p className={styles.__description}>{text}</p>
    </details>
  );
};

export default Dropdown;