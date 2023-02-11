import { useState } from 'react';
import arrow from '../../assets/images/downArrow.svg';
import styles from "./styles.module.scss";

const Dropdown = ({title, text}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details className={styles.__details} open={isOpen} onToggle={() => setIsOpen(!isOpen)}>
        <summary className={styles.__title}>
            {title}
            <img id='arrow' src={arrow} alt="Arrow" className={isOpen ? styles.__isOpen : styles.__isClosed } />
        </summary>
        <p className={styles.__description}>{text}</p>
    </details>
  );
};

export default Dropdown;