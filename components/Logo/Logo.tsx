'use client'
import React, { FC } from 'react'
import LogoIcon from "@/assets/images/icons/logos/livist-logo.svg";

interface LogoProps {
    classNames?: string;
}

const Logo: FC<LogoProps> = ({classNames}) => {
  return (
        <LogoIcon classNames={classNames} />
    
  )
}

Logo.displayName = 'LogoComp'

export default Logo