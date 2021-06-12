import Head from "next/head";
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import {useRouter} from 'next/router'

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords}/>
      </Head>
      <Header />

      {/* Will only Display Showcase only when the pathname is the home page */}
      {router.pathname === '/' && <Showcase />}
      <div>
        {children}
      </div>
      <Footer />
    </div>
  );
}


Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: "Find the latest DJ and other musical events",
    keywords: "Music, DJ, EDM, events"
}