import Head from "next/head";
import FormControl from "../components/FormControl";


export default function Forms() {
    return <>
        <Head>
            <title>Laboratoire | Formulaires</title>
            <meta name="description" content="Présentation de différentes façon de programmer les formulaires avec React." />
        
            <meta property="og:title" content="Laboratoire | Formulaires" />
            <meta property="og:description" content="Présentation de différentes façon de programmer les formulaires avec React." />
            <meta property="og:image" content="http://localhost:3000/logo.png" />
        </Head>


        <section>
            <h2>Formulaire contrôllé</h2>
            <FormControl />
        </section>

    </>
}