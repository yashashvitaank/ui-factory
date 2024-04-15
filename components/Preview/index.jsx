import parse from "html-react-parser";
import styles from "./styles.module.scss"
function Preview({markup}) {
  return (
    <div className={styles.container} >
        <div>{parse(markup)}</div>
    </div>
  )
}

export default Preview