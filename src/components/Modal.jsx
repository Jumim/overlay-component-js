import React from 'react'
import { Button } from '@components'
import styles from '@assets/scss/Modal.module.scss'

/**
 * modal component
 * @param {React.Ref} ref - modal element ref
 * @param {string} title - modal title
 * @param {ReactNode} children - modal content
 * @param {Object} ok - { label: string, onClick: function }
 * @param {Object} cancel - { label: string, onClick: function }
 * @param {function} closeModal - close modal function
 */
export const Modal = React.forwardRef((props, modalRef) => {
  const { title, children, ok, cancel, closeModal } = props

  return (
    <section className={styles.modal_section}>
      <div ref={modalRef} className={styles.modal_content}>
        {title && <div className={styles.title}>{title}</div>}

        <div className={styles.content}>{children}</div>

        {(ok || cancel) && (
          <div className={styles.button_group}>
            {cancel && (
              <Button
                className="cancel"
                onClick={() => {
                  cancel.onClick?.()
                  closeModal()
                }}>
                {cancel.label}
              </Button>
            )}
            {ok && (
              <Button
                onClick={() => {
                  ok.onClick?.()
                  closeModal()
                }}>
                {ok.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
})
