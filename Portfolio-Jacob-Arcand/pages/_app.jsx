import Layout from '../components/Layout'

import 'normalize.css/normalize.css'
import '../styles/globals.css'

import { Open_Sans, Rubik } from '@next/font/google'

const opensans = Open_Sans({ subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
    return <>
        <style jsx global>{`
            html {
                font-family: ${opensans.style.fontFamily};
            }

            h1, h2, h3, h4, h5, h6 {
                font-family: ${rubik.style.fontFamily};
            }
        `}</style>

        <Layout>
            <Component {...pageProps} />
        </Layout>
    </> 
}
