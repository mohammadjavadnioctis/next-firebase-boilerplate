
import { UiLink } from '@/lib'
import MainMenuItems from '@/utils/data/mainMenuItems'
import React from 'react'
import { FC } from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Logo from '@/components/Logo/Logo'
import LangSelect from '@/components/LangPicker/LangPicker'
import MobileMenu from '@/components/MobileMenu/MobileMenu'
import Image from 'next/image'
import ApplyButton from '../ApplyButton/ApplyButton'
import ContactButton from '../ContactButton/ContactButton'
import WhatsappButton from '../WhatsappButton/WhatsappButton'

const Header: FC = () => {
  return (
    <header className='sticky top-0 z-[999]'>
        <div className='container hidden lg:flex justify-between items-center bg-primary py-4 px-4 rounded-[78px]'>
            <div className='flex items-center space-x-[30px]'>
                {/* <Logo /> */}
                <NavBar itemsWrapperClassName='flex space-x-[25px]' itemClassName='text-white font-semibold text-base '/>
            </div>
            <div className='flex space-x-2 items-center'>
                <ApplyButton />
                <ContactButton />
                <WhatsappButton />
            </div>
        </div>
            <div className='mobile-header container flex justify-between lg:hidden py-4 px-4 bg-white'>
              <LangSelect />
              {/*TODO:  for some unknown reason using SVG or Next/image the image does not show up  */}
              <img
              src={'https://firebasestorage.googleapis.com/v0/b/livist-723d3.appspot.com/o-content%2Flivist-logo-blue.svg?alt=media&token=4f3315fb-9e70-4e98-82dc-2875fadeac2b'}
              width={63}
              height={33}
              alt='livist logo'
              />
              {/* <Logo /> */}
              {/* <MobileMenu /> */}
            </div>
    </header>
  )
}


Header.displayName = 'Header'

export default Header