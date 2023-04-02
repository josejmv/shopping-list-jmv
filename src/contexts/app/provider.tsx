// main tools
import { useState, useRef } from 'react'

// prime components
import { Toast } from 'primereact/toast'

// bootstrap components
import { Modal } from 'react-bootstrap'

// context
import { AppContext } from './context'

// types
import { FC, ReactNode } from 'react'

type AppContextProviderProps = {
  children: ReactNode
}

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children
}) => {
  const toast = useRef<Toast>(null)
  const [showManageList, setShowManageList] = useState(false)
  const context = { handleShowManageList, toast: () => toast.current as Toast }

  function handleShowManageList() {
    setShowManageList(true)
  }

  return (
    <AppContext.Provider value={context}>
      {children}
      <Toast ref={toast} position='top-right' />

      <Modal
        centered
        show={showManageList}
        onHide={() => setShowManageList(false)}>
        <Modal.Header closeButton />
        <Modal.Body>
          <h2>Create shopping list</h2>
        </Modal.Body>
      </Modal>
    </AppContext.Provider>
  )
}
