import Image from 'next/image'
import { Inter } from 'next/font/google'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next';
import useTrans from '@/utils/hooks/useTrans';


const inter = Inter({ subsets: ['latin'] })


export const getStaticProps: GetStaticProps = async (context) => {
  // fetch a list of properties from the database
  const {locale} = context
  return {
    props: { ...(await serverSideTranslations(locale as string, ['common'])), },
  };
};



export default function Home() {
  const t = useTrans()
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <h1>Livist sigorta</h1>
    </main>
  )
}
