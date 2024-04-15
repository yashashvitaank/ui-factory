import React from 'react'
import parse from "html-react-parser";
import styles from "./styles.module.scss";
import { useRouter } from 'next/navigation';
import CopyButton from '@/components/CopyButton';
function ComponentBox(props) {
    const {id, name, author, markup} = props;
    const router = useRouter();
    const url = `/ui-factory/ui-element/${id}`;
    const handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
    }
  return (
    <div className={styles.container} onClick={()=>{router.push(url)}}>
        <div className={styles.markupContainer} onClick={handleClick}>{parse(markup)}
        </div>
    </div>
  )
}

export default ComponentBox