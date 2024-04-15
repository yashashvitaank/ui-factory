import Back from "@assets/back.svg"
import Image from "next/image"
import styles from "./styles.module.scss"
import { useRouter } from "next/navigation"

function BackButton() {
    const router = useRouter();

  return (
    <div className={styles.back} onClick={()=>{router.back()}}>
        <Image src={Back} width={30} height={30} alt="back" />
        <span>Go Back</span>
    </div>
  )
}

export default BackButton