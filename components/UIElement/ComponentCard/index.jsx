import CodePane from '@/components/CodePane'
import Preview from '@/components/Preview'
import styles from "./styles.module.scss"

function ComponentCard({markup}) {
  return (
    <div className={styles.componentCard}>
        <Preview markup={markup} />
        <div className={styles.border}></div>
        <CodePane markup={markup} />
      </div>
  )
}

export default ComponentCard