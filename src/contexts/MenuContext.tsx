'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { useMedia } from '@/hooks/useMedia'
import { breakpoints } from '@/styles/variables'

interface MenuProviderProps {
  children: ReactNode
}

interface MenuContextProps {
  fullMenu: boolean
  toggleMenu: () => void
}

const MenuContext = createContext({} as MenuContextProps)

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [fullMenu, setFullMenu] = useState(false)
  const startFullMenu = useMedia(`(min-width: ${breakpoints.tablet})`)

  useEffect(() => {
    setFullMenu(startFullMenu ?? false)
  }, [startFullMenu])

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
