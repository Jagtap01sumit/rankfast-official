import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { Raleway, Poppins } from '@next/font/google'
import store from '@/redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/css';
import 'swiper/css/pagination';
import "animate.css/animate.min.css";
import 'animate.css';
import '@/styles/globals.css'
import { Footer, Header } from '@/sections'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--primary-font'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--secondary-font'
})

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle')
  }, [])

  useEffect(() => {
    if (router.pathname === "/career") {
      document.body.classList.add('career-page');
      document.body.classList.remove('portfolio-page');
    } else if (router.pathname === "/portfolio") {
      document.body.classList.add('portfolio-page');
      document.body.classList.remove('career-page');
    } else if (router.pathname.startsWith('/services/')) {
      document.body.classList.add('saas-seo-page');
      document.body.classList.remove('portfolio-page');
      document.body.classList.remove('career-page');
    } else {
      document.body.classList.remove('career-page', 'portfolio-page', 'saas-seo-page');
    }
  }, [router.pathname]);


  return <>
    <Provider store={store}>
      <div className={`${raleway.variable} ${poppins.variable}`}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </Provider>
  </>
}
