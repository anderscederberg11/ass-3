import styles from "./Header.module.css"

export default function Header() {
    return(
        <>
            <div className={styles.headerContainer}>
                <div className={styles.images}>
                    <img src="images/bcit_logo.png" width={85} height={85} className={styles.logo}></img>
                    <img src="images/shopping.png" width={50} height={50} className={styles.cart}></img>                    
                </div>
                <ul className={styles.headerInfo}>
                    <li>Home</li>
                    <li>Hours</li>
                    <li>Merchandise</li>                                 
                </ul>
            </div>
        </>
    )
}