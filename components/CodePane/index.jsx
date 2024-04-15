import HtmlLogo from "@assets/html.svg"
import styles from "./styles.module.scss"
import Image from "next/image"
import CopyButton from "../CopyButton"
function CodePane({markup}) {
  
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={HtmlLogo} width={30} height={30} alt="logo" /> <span>HTML</span>
        </div>
        <div className={styles.markupContainer}>
          <CopyButton text={markup} />
          <div style={{marginTop:"1rem"}}>{markup}</div>
        </div>
    </div>
  )
}

export default CodePane