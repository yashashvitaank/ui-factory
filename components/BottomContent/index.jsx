import Ratings from "../Ratings"
import styles from "./styles.module.scss"

function BottomContent({views}) {
  return (
    <div className={styles.bottom}>
        <div className={styles.copied}>{views} People Viewed this Element</div>
    </div>
  )
}

export default BottomContent