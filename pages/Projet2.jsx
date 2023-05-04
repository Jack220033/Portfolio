import Head from "next/head"
import styles from '../styles/Projet.module.css';
import Image from 'next/image';


import contenue from '../public/P2Contenue.1.png'
import contenue1 from '../public/P2Contenue.2.png'
import contenue2 from '../public/P2Contenue.3.png'
import contenue3 from '../public/P2Contenue.4.png'
import contenue4 from '../public/P2Contenue.png'
import contenue5 from '../public/P2Header.png'
import contenue6 from '../public/P2Home.png'
import contenue7 from '../public/P2SlideShow.png'

export default function Projet2() {
    return <>
    <Head>
            <title>Projet rat rod</title>
            <meta name="description" content="Page du projet de robotique avec plusieur composante de React HTML et qui decrit le fonctionnement sur le projet de rat rod" />

            <meta property="og:title" content="Projet de rat rod" />
            <meta property="og:description" content="Page du projet de robotique avec plusieur composante de React HTML et qui decrit le fonctionnement sur le projet de rat rod" />
            <meta property="og:image" content="http:/localhost:3000/nomImage" />
        </Head>
        <section className={styles.space}>
            <h2>Projet de Rat Rod</h2>
            <div className={styles.description}>
                <Image src={contenue6} alt="Projet 1" />
                <div>
                    <p>
                        &emsp;Le deuxième projet que je vais parler d&apos;est un projet personnel que je travaille déçu sa fait cela déjà quelques années que j&apos;y travaille.
                        Le terme du projet est sur les Rat Rod c&apos;est-à-dire des vielles voiture des années 1886-1970 environ, et il les reconstruire avec des turbo,
                        des moteur surpuissant, des roue corpulent, etc… Pourquoi est-ce que j&apos;ai fait un site web sur les Rat Rod et bien c&apos;est que j&apos;ai une passion
                        pour des vielle voitures, je regarde souvent des émission de télévision sur Discovery qui s&apos;appelle Vegas Rat Rod qui est animé
                        par Steve Darnell. Éventuellement je vais me procurer une Ford Charger 1969 ou un Ford F-150 1948 à 1969 pour me faire un Rat Rod.
                        Donc d&apos;où vient l&apos;idée de faire un site web de Rat Rod comme j&apos;ai mentionné plus haut j&apos;ai une passion pour c&apos;est voiture et que j&apos;avais
                        du temps libre ici et là donc je travaille petit à petit sur le site. De plus faire ce site me fait pratiquer à coder puis
                        apprendre/essayer de nouvelle chose que je peux faire pour d&apos;autre projet. Le code du site doit être mis à jour car quand
                        j&apos;ai commencé le site c&apos;était vraiment la base du HTML mais maniement après toute les cours de web que j&apos;ai eu la chance de avoir toute
                        au long de mon parcours au collège j&apos;ai appris de nombreuse nouvelle fonction et comment avoir du code plus simplifier.
                        Les nouvelle système de programmation que j&apos;ai appris son node.js avec Handlebars et next.js avec React.
                        Donc dans les prochains mois à venir mon projet de Rat Rod va se faire coder en node.js et une autre version en next.js qui seront toute
                        accessible sur le site originaire. Les trois code seront aussi toute disponible pour voir comment le site à évoluer depuis
                        sa création originaire.
                    </p>
                    <p>

                    </p>
                </div>
            </div>
        </section>

        <section className={styles.space}>
            <h2>Technologies</h2>
            <ul className={styles.technologie}>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </section>

        <section className={styles.space}>
            <h2>Gallerie</h2>
            <div className={styles.gallerie}>
                <Image src={contenue} alt="Description 1" />
                <Image src={contenue1} alt="Description 2" />
                <Image src={contenue2} alt="Description 3" />
                <Image src={contenue3} alt="Description 4" />
                <Image src={contenue4} alt="Description 5" />
                <Image src={contenue5} alt="Description 6" />
                <Image src={contenue7} alt="Description 7" />
            </div>
        </section>
    </>
}