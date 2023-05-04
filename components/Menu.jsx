import Link from "next/link";
import styles from '../styles/Menu.module.css'

export default function Menu() {
    return <nav className={styles.menu}>
        <ul>
            <li>
                <Link href="/Projet1" className={styles.link}>
                    Projet 1
                </Link>
            </li>
            <li>
                <Link href="/Projet2" className={styles.link}>
                    Projet 2
                </Link>
            </li>
            <li>
                <Link href="/forms" className={styles.link}>
                    Contact
                </Link>
            </li>
        </ul>
    </nav>
}