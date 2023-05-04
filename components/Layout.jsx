import { cloneElement, useState } from 'react';
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
    const [page, setPage] = useState('accueil');

    return <>
        <Header setPage={setPage} />

        {cloneElement(children, { page })}

        <Footer />
    </>
}