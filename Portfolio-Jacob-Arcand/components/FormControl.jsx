import { useState } from "react";

import styles from "../styles/Forms.module.css"

export default function FormControl() {
    const [courriel, setCourriel] = useState('');
    const handleCourrielChange = (event) => setCourriel(event.target.value);
    const [erreurCourriel, setErreurCourriel] = useState('');
    const valideCourriel = () => {
        if (!courriel) {
            setErreurCourriel('Le courriel est requis');
            return false;
        }
        else if (!courriel.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
            setErreurCourriel('Le courriel n\'est pas valide');
            return false;
        }
        else {
            setErreurCourriel('');
            return true;
        }
    }

    const [Nom, setNom] = useState('');
    const handleNomChange = (event) => setNom(event.target.value);
    const [erreurNom, setErreurNom] = useState('');
    const valideNom = () => {
        if (!Nom) {
            setErreurNom('Le nom est requis');
            return false;
        }
        else {
            setErreurNom('');
            return true;
        }
    }

    const [Message, setMessage] = useState('');
    const handleMessageChange = (event) => setMessage(event.target.value);
    const [erreurMessage, setErreurMessage] = useState('');
    const valideMessage = () => {
        if (!Message) {
            setErreurMessage('Le Message est requis');
            return false;
        }
        else {
            setErreurMessage('');
            return true;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let courrielValide = valideCourriel();
        let NomValide = valideNom();
        let MessageValide = valideMessage();

        if (courrielValide && NomValide && MessageValide) {
            let data = {
                Nom: Nom,
                courriel: courriel,
                Message: Message
            }

            console.log(data);
        }
    }


    return <form className={styles.form} noValidate onSubmit={handleSubmit}>

        <label>
            Nom:
            <input
                type="text"
                required
                value={Nom}
                onChange={handleNomChange}
                onBlur={valideNom} />
        </label>
        {erreurNom &&
            <div className={styles.erreur}>
                {erreurNom}
            </div>
        }

        <label>
            Courriel:
            <input
                type="email"
                required
                value={courriel}
                onChange={handleCourrielChange}
                onBlur={valideCourriel} />
        </label>
        {erreurCourriel &&
            <div className={styles.erreur}>
                {erreurCourriel}
            </div>
        }

        <label>
            Message:
            <input
                type="text"
                required
                value={Message}
                onChange={handleMessageChange}
                onBlur={valideMessage} />
        </label>
        {erreurMessage &&
            <div className={styles.erreur}>
                {erreurMessage}
            </div>
        }

        <input type="submit" value="Connecter" />
        
    </form>
}