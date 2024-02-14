import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"

function ContactDetail(props) {
    const {name, href, imgSrc, info, paddingBottom} = props;
  return (
    <div className={styles.contentWrapper}>
        <div className={styles.iconWrapper}>
            <Image src={imgSrc} alt="Linkedin" width={40} height={40} style={{paddingBottom}}/>
        </div>
        <p className={styles.contactName}>{name}</p>
        <a href={href} target="_blank" className={styles.details}>{info}</a>
    </div>
  )
}

export default ContactDetail