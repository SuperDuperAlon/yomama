import { userService } from '@/services/user.service'
import React from 'react'

const LogoutCmp = () => {

  function handleLogout() {
    userService.logout()
  }

  return (
    <div>
      <button onClick={() => handleLogout() }>Logout</button>
    </div>
  )
}

export default LogoutCmp