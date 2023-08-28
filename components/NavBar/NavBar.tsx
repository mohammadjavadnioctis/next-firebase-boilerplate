import { UiLink } from '@/lib'
import MainMenuItems from '@/utils/data/mainMenuItems'
import useTrans from '@/utils/hooks/useTrans'
import React, { FC } from 'react'

interface NavBarType {
  itemsWrapperClassName?: string,
  itemClassName?: string
}

const NavBar: FC<NavBarType> = ({itemsWrapperClassName, itemClassName}) => {
  const t = useTrans()
  return (

    <ul className={itemsWrapperClassName}>
      {
        MainMenuItems.map(menuItem => {
          const { label, href, id } = menuItem
          return (
            <li key={id} className={itemClassName}>
              {/* @ts-ignore */}
              <UiLink href={href}>{t(label.toUpperCase())}</UiLink>
            </li>
          )
        })
      }
    </ul>
  )
    }

NavBar.displayName = "NavBar"

export default NavBar