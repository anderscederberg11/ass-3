import styles from "./Button.module.css"

export default function Button() {
    return(
        <>
            <div className={styles.buttonContainer}>
                <button className={styles.filter}>Book Title</button>
                <button className={styles.arrowUp}>&#8593;</button>
                <button className={styles.arrowDown}>&#8595;</button>
            </div>
        </>
    )
}