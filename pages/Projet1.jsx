import Head from "next/head";
import Image from 'next/image';
import styles from '../styles/Projet.module.css';

import contenue from '../public/P1Contenue.1.png'
import contenue2 from '../public/P1Contenue.2.png'
import contenue3 from '../public/P1Contenue.png'
import contenue4 from '../public/P1Feture.png'
import contenue5 from '../public/P1Header.1.png'
import contenue6 from '../public/P1Header.2.png'
import contenue7 from '../public/P1Header.3.png'

export default function Projet1() {
    return <>
    <Head>
            <title>Projet de Robotique</title>
            <meta name="description" content="Page du projet de robotique avec plusieur composante de React HTML et qui decrit le fonctionnement sur le projet de robotique" />

            <meta property="og:title" content="Projet de Robotique" />
            <meta property="og:description" content="Page du projet de robotique avec plusieur composante de React HTML et qui decrit le fonctionnement sur le projet de robotique" />
            <meta property="og:image" content="http:/localhost:3000/nomImage" />
        </Head>
        <section className={styles.space}>
            <h2>Projet de Robotique</h2>
            <div className={styles.description}>
                <Image src={contenue} alt="Projet 1" />
                <div>
                    <p>
                        Dans le premier projet que je vais parler d&apos;est était de faire un site web, construire un robot baser sur le jeux qui est donner,
                        faire une vidéo et un tutoriel pour une compétition de robotique. Pour le côté du site web de la compétions on devait parler de
                        c&apos;est quoi la compétition de robotique CRC, explique les règlement du jeux, de notre expérience sur la compétions,
                        ce que on a appris toute au long de la compétition et des pepins que on a eu en cours de route. Donc sur le site on y retrouver dans
                        le menus un bouton compétions, jeux, expérience, équipe et rebot. Si on va sur les bouton expérience et rebot il y une menus
                        qui décent avec toute les différente section qui se retrouver sur cette pages.
                    </p>

                </div>
            </div>
        </section>

        <section className={styles.space}>
            <h2>Technologies</h2>
            <ul className={styles.technologie}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Handlebars</li>
            </ul>
        </section>

        <section className={styles.space}>
            <h2>Gallerie</h2>
            <div className={styles.gallerie}>
                <Image src={contenue2} alt="Description 1" />
                <Image src={contenue3} alt="Description 2" />
                <Image src={contenue4} alt="Description 3" />
                <Image src={contenue5} alt="Description 4" />
                <Image src={contenue6} alt="Description 5" />
                <Image src={contenue7} alt="Description 6" />
            </div>
        </section>
    </>
}