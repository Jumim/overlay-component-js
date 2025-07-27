import React, { useEffect, useRef, useState } from 'react'
import { Modal } from '@components/Modal'

const ModalContext = React.createContext({ controlModal: () => {} })

/**
 * modal provider
 */
const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState(false) // modal visibility state
  const [modalContent, setModalContent] = useState(null) // modal content

  const modalRef = useRef(null)

  useEffect(() => {
    const handleMouseDownBackground = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal()
      }
    }

    if (modalState) {
      document.addEventListener('mousedown', handleMouseDownBackground)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('mousedown', handleMouseDownBackground)
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseDownBackground)
      document.body.style.overflow = 'auto'
    }
  }, [modalState])

  /***
   * modal control
   * @param {boolean} state - modal visibility state
   * @param {Object} data - modal content data
   */
  const controlModal = (state, data) => {
    setModalContent(data)
    setModalState(state)
  }

  /**
   * close modal
   */
  const closeModal = () => {
    setModalContent(null)
    setModalState(false)
  }

  const modalProps = {
    title: modalContent?.title,
    ok: modalContent?.ok,
    cancel: modalContent?.cancel,
    closeModal
  }

  return (
    <ModalContext.Provider value={{ controlModal }}>
      {children}
      {modalState && (
        <Modal ref={modalRef} {...modalProps}>
          {typeof modalContent.content === 'string' ? modalContent.content : <modalContent.content {...modalContent.props} />}
        </Modal>
      )}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
