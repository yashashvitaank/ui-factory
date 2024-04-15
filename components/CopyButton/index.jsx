'use client'
import Image from 'next/image'
import Copy from "@assets/copy.svg"
import Tick from "@assets/tick.svg"
import styles from "./styles.module.scss"
import { useState } from 'react';
function CopyButton({text}) {
    const [copying, setCopying] = useState(false);
    const copyContent = () => {
        navigator.clipboard.writeText(text);
        setCopying(true);
        setTimeout(() => {
            setCopying(false);
        }, 2500);
    }
    const CTA = copying ? "Copied!" : "Copy";
  return (
    <button className={styles.copy} onClick={copyContent}>
        {!copying ? <Image src={Copy} width={25} height={25} alt='copy' className={styles.copyAnimation}/> : <Image src={Tick} width={25} height={25} alt='ticked' className={styles.copyAnimation} />}
        <span>{CTA}</span>
    </button>
  )
}

export default CopyButton