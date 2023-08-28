import { UiLink } from '@/lib'
import useTrans from '@/utils/hooks/useTrans'
import React, { FC } from 'react'

interface ContactButtonType {
    className?: string,
}

const ContactButton: FC<ContactButtonType> = ({className}) => {
    const t = useTrans()
    return (

        <UiLink href={'#'} className={`${className} px-14  py-3 font-normal bg-white text-base text-primary hover:text-white hover:bg-accent rounded-[120px] transition-all`} >
           {t('BİZE ULAŞIN')}
        </UiLink>

    )
}


ContactButton.displayName = 'ContactButton'



export default ContactButton