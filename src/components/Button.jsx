import styles from '@assets/scss/Button.module.scss'

export const Button = props => {
  const { className, children, ...buttonProps } = props

  return (
    <button className={`${styles.button} ${styles[className]}`} {...buttonProps}>
      {children}
    </button>
  )
}
