import Menu from "./Menu";
import Link from 'next/link'
import Image from "next/image";

import styles from '../styles/Header.module.css';
import logo from '../public/webLogo.jpg';

export default function Header({setPage}) {
    return <header className={styles.header}>
        <div className="wrapper">
            <Link href="/"> 
                <Image src={logo} alt="Logo" onClick={() => { setPage('accueil') }} />  
            </Link>
            <h1>Portfolio de Jacob Arcand</h1>
            <Menu setPage={setPage} />
        </div>
    </header>
}