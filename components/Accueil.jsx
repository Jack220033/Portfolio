import Head from "next/head";
import styles from '../styles/Accueil.module.css'
import Image from 'next/image'


import jacob from '../public/jacobGrad.png'
import gravur from '../public/bamboo.jpg'

export default function Accueil() {
    return <>
        <Head>
            <title>Portfolio Jacob Arcnad</title>
            <meta name="description" content="Page du d'acceuil du portfolio  avec plusieur composante de React" />

            <meta property="og:title" content="Page d'acceuil portfolio Jacob Arcand" />
            <meta property="og:description" content="Page du d'acceuil du portfolio  avec plusieur composante de React" />
            <meta property="og:image" content="http:/localhost:3000/nomImage" />
        </Head>
        <section className={styles.presentation}>

            <Image src={jacob} alt="Photo de moi"/>

            <div>
                <h2>Bonjour, je suis Jacob Arcand</h2>
                <p>
                    Née le 22 mars 2002 a l&apos;hôpital mont fort à Ottawa.
                    Fait mon élémentaire à l&apos;école élémentaire St Albert de martannelle a la 1er   année, de 2e année à la mit 4e année a
                    l&apos;école l&apos;Académie De La Seigneurie a Casselman, de la mit 4e année à la 8e année à l&apos;école Saint Guillaume à Vars.
                    J&apos;ai fait mon secondaire à Garneau puis j&apos;ai fait la concentration en informatique puis j&apos;ai fait un coop avec un
                    focus au cours de mes 4 années au secondaire et qui ma donner l&apos;opportunité de commencer a travailler au gouvernement fédérale
                    Commencer à travailler a l&apos;âge de 16 ans a MR Kitchen pour quelque étés et quand j&apos;avait des jours de conge d&apos;école (conge de March, snow day, etc…),
                    j&apos;ai commencer a travailler a CBAS-ASFC ( Agence des Services Frontaliers du Canada).
                </p>
                <p>
                    Je suis quelqu&apos;un qui aime faire de la programmation sur mon temps libre puis apprendre d&apos;avantage sur les nouvelle technique de programmation.
                    De plus, sur mes temps libre j&apos;aime faire des gravures sur du bois, pratiquer des sport comme du surfboard, wakeboard, du vélo, golf.
                    De temps en autre je joue au jeux vidéo, aller voir des ami(e)s, écouter de la musique et parfois faire des remix, crée des cover et faire des beats.                </p>
            </div>
        </section>

        <section className={styles.presentation + ' ' + styles.inverse}>
            <Image src={gravur} alt="Photo d'une gravur que j'ai fait une aigle"/>
            <div>
                <h2>Mes intérêts</h2>
                <ul>
                    <li>Programmer</li>
                    <li>Ecoute de la musique</li>
                    <li>Faire du sport</li>
                    <li>Travailler le bois</li>
                    <li>voyage</li>
                    <li>Passion pour le jeux video</li>
                </ul>
            </div>
        </section>
    </>
}