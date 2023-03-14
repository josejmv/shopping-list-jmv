// main tools
import { useContext } from 'react'

// context
import { AppContext } from '@contexts/app/context'

export const useApp = () => useContext(AppContext)
