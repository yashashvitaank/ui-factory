import BackButton from "@/components/BackButton";
import styles from "./styles.module.scss"

function TitleContent(props) {
    const {name, author} = props;
  return (
    <div className={styles.titleContainer}>
    <BackButton />
    <div className={styles.title}>{name} by {author}</div>
    </div>
  )
}

export default TitleContent