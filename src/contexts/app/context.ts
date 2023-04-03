// main tools
import { createContext } from 'react'

// types
import { ConfirmDialogProps } from 'primereact/confirmdialog'
import { ListDataType } from 'types/List'
import { Toast } from 'primereact/toast'

type AppContextType = {
  updateLists: () => void
  toast: () => Toast | undefined
  lists: ListDataType[] | undefined
  confirmDialog: (props: ConfirmDialogProps) => void
  handleShowManageList: (list?: ListDataType) => void
}

export const AppContext = createContext<AppContextType>({
  lists: [],
  toast: () => undefined,
  updateLists: () => null,
  confirmDialog: () => null,
  handleShowManageList: () => null
})
