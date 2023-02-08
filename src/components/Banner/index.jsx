import styles from "./styles.module.scss";

const Banner = ({ banner, text}) => {
    return (
        <div className={styles.__banner}>
            <img className={styles.__pic} src={banner} alt="banner"></img>
            <h1 className={styles.__text}>{text}</h1>
        </div>
    )
};

export default Banner;