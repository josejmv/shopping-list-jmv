// main tools
import { useState, useRef, useEffect } from 'react'

// components
import { ListManagement } from '@molecules/list-management'
import { Modal } from '@molecules/modal'

// prime components
import { Toast } from 'primereact/toast'
import {
  ConfirmDialog,
  confirmDialog as primeConfirmDialog
} from 'primereact/confirmdialog'

// context
import { AppContext } from './context'

import classes from './styles.module.scss'

// types
import { ConfirmDialogProps } from 'primereact/confirmdialog'
import { ListDataType } from 'types/List'
import { FC, ReactNode } from 'react'

type AppContextProviderProps = {
  children: ReactNode
}

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children
}) => {
  const toast = useRef<Toast>(null)
  const [lists, setLists] = useState<ListDataType[]>()
  const [listToUpdate, setListToUpdate] = useState<ListDataType>()
  const [showManageList, setShowManageList] = useState(false)

  const context = {
    lists,
    updateLists,
    confirmDialog,
    handleShowManageList,
    toast: () => toast.current as Toast
  }

  function confirmDialog(props: ConfirmDialogProps) {
    return primeConfirmDialog({
      ...props,
      acceptLabel: 'Si',
      rejectLabel: 'No',
      header: 'Eliminar lista',
      className: classes.dialog,
      acceptClassName: classes.button,
      rejectClassName: classes.button_outline,
      contentClassName: classes.dialog_content,
      message: 'Estas seguro de eliminar esta lista?'
    })
  }

  function updateLists() {
    const lists = JSON.parse(localStorage.getItem('lists') as string)

    setLists(lists ?? [])
  }

  function handleShowManageList(list?: ListDataType) {
    setListToUpdate(list)
    setShowManageList(!showManageList)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateLists()
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <AppContext.Provider value={context}>
      {children}

      <Toast ref={toast} position='top-right' />

      <Modal show={showManageList} onHide={() => setShowManageList(false)}>
        <ListManagement list={listToUpdate} />
      </Modal>
      <ConfirmDialog />
    </AppContext.Provider>
  )
}
