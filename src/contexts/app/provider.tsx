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
  const [showCreateList, setshowCreateList] = useState(false)
  const context = { handleShowCreate, toast: () => toast.current as Toast }

  function handleShowCreate() {
    setshowCreateList(true)
  }

  return (
    <AppContext.Provider value={context}>
      {children}
      <Toast ref={toast} position='top-right' />

      <Modal
        centered
        show={showCreateList}
        onHide={() => setshowCreateList(false)}>
        <Modal.Header closeButton />
        <Modal.Body>
          <h2>Create shopping list</h2>
        </Modal.Body>
      </Modal>
    </AppContext.Provider>
  )
}
