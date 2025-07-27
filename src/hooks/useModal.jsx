import { useContext } from 'react'
import { ModalContext } from '@providers'

export const useModal = () => {
  const { controlModal } = useContext(ModalContext)

  /**
   * open modal
   * @param {ReactNode} content
   */
  const openModal = content => {
    controlModal(true, content)
  }

  /**
   * close modal
   */
  const closeModal = () => {
    controlModal(false, null)
  }

  return { openModal, closeModal }
}
