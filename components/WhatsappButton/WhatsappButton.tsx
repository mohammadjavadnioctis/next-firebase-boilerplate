import { UiLink } from '@/lib'
import React from 'react'
import { FC } from 'react'
import WhatsAppIcon from '@/assets/images/icons/whatsapp-logo.svg'


const WhatsappButton: FC = () => {
  return (
    <UiLink href="https://api.whatsapp.com/send/?phone=+905538009999&text=Merhabalar%20ben%20sigorta%20hakk%C4%B1nda%20dan%C4%B1%C5%9Fmanl%C4%B1k%20istiyorum" target={"_blank"} className='w-10 h-10 bg-[#90B46D] flex items-center justify-center rounded-full'>
      <WhatsAppIcon />
    </UiLink>
  )
}



export default WhatsappButton