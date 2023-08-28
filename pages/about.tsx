import { Inter, Vazirmatn } from 'next/font/google'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next';
import useTrans from '@/utils/hooks/useTrans';
import HomePage from '@/components/Pages/Homepage';
import { ReactElement } from 'react';
import ClientLayout from '@/components/Layouts/ClientLayout';
import AboutPage from '@/components/Pages/AboutPage/AboutPage';


const inter = Inter({ subsets: ['latin'] })


const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic", "latin-ext"] , 
  weight:["100","200", "300" ,"400", "500", "600", "700", "800", "900"],
  variable: '--font-vazirmatn',
});

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch a list of properties from the database
  const {locale} = context
  return {
    props: { ...(await serverSideTranslations(locale as string, ['common'])), },
  };
};



function About() {
  const t = useTrans()
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${vazirmatn.className}`}
    // >
        <AboutPage />
    // </main>
  )
}

About.displayName = "About"

About.getLayout = function getLayout(page: ReactElement) {
  return (
    
      <ClientLayout>{page}</ClientLayout>
    
  )
}

export default About
 
