import type { ReactElement } from 'react'
import ClientLayout from '../Layouts/ClientLayout'
import { NextPageWithLayout } from '@/pages/_app'
import useTrans from '@/utils/hooks/useTrans'
 
const HomePage: NextPageWithLayout = () => {
    const t = useTrans()
  return <p>hello world {t("ANA SAYFA")} page</p>
}
 

export default HomePage