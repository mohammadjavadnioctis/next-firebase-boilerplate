import React, { ReactElement } from 'react'

const AgentDashboardLayout = ({children} : {children: ReactElement}) => {
  return (
    <div>
        AgentDashboardLayout layout
        {children}
    </div>
  )
}

AgentDashboardLayout.displayName = "AgentDashboardLayout"

export default AgentDashboardLayout