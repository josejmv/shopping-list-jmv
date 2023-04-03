// bootstrap components
import { Modal as BsModal } from 'react-bootstrap'

// styles
import classes from './styles.module.scss'

// types
import { ModalProps as BsModalProps } from 'react-bootstrap'
import { FC, ReactNode } from 'react'

interface ModalProps extends BsModalProps {
  children: ReactNode
}

export const Modal: FC<ModalProps> = ({ children, show, onHide }) => (
  <BsModal
    centered
    show={show}
    onHide={onHide}
    className={classes.modal}
    contentClassName={classes.modal_content}>
    <BsModal.Header className={classes.modal_header} closeButton />
    <BsModal.Body className={classes.modal_body}>{children}</BsModal.Body>
  </BsModal>
)
