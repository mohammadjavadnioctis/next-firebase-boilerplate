import React, { ReactElement } from 'react'

const ClientLayout = ({children} : {children: ReactElement}) => {
  return (
    <div>
        client layout
        {children}
    </div>
  )
}

ClientLayout.displayName = "ClientLayout"

export default ClientLayout