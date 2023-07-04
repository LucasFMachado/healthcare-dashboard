'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface MenuProviderProps {
  children: ReactNode
}

interface MenuContextProps {
  fullMenu: boolean
  toggleMenu: () => void
}

const MenuContext = createContext({} as MenuContextProps)

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [fullMenu, setFullMenu] = useState<boolean>(true)

  function toggleMenu() {
    setFullMenu(!fullMenu)
  }

  return (
    <MenuContext.Provider
      value={{
        fullMenu,
        toggleMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

const useMenu = () => useContext(MenuContext)

export { MenuContext, MenuProvider, useMenu }
