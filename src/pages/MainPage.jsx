import { useModal } from '@hooks'
import { Button } from '@components'
import styles from '@assets/scss/MainPage.module.scss'

export const MainPage = () => {
  const { openModal } = useModal()

  const handleClickModal = () => {
    openModal({
      title: '모달 제목',
      content: '모달 내용',
      ok: {
        label: '확인',
        onClick: () => console.log('모달 확인')
      },
      cancel: {
        label: '취소',
        onClick: () => console.log('모달 취소')
      }
    })
  }

  return (
    <section className={styles.main_section}>
      <div className={styles.main_content}>
        <Button onClick={handleClickModal}>모달</Button>
      </div>
    </section>
  )
}
