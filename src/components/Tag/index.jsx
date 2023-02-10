import React from 'react';
import styles from "./styles.module.scss";

const Tag = ({tags}) => {
    const tagList = tags.map((tag) => <li className={styles.__element} key={tag}>{tag}</li>);

    return(
        <ul className={styles.__list}>{tagList}</ul>
    );
};

export default Tag;