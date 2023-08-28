import { UiLink } from '@/lib'
import useTrans from '@/utils/hooks/useTrans'
import React from 'react'
import { FC } from 'react'

interface ApplyButtonType {
    className?: string
}

const ApplyButton: FC<ApplyButtonType> = ({className}) => {
  const t = useTrans()
  return (
    <UiLink href={'#'} className={`${className} px-14  py-3 font-normal bg-accent hover:bg-white hover:text-accent text-base text-white rounded-[120px] transition-all`} >
        {t('BAŞVURU')}
    </UiLink>
  )
}

ApplyButton.displayName = "ApplyButton"


export default ApplyButton