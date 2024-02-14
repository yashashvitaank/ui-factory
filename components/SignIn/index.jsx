import styles from "./styles.module.scss"
import Input from '../Input'
import Button from "../Button"

function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <p>sign in page</p>
        {/* <form action="">
          <Input />
          <Input />
          <Input />
          <Button />
        </form> */}
      </div>
    </div>
  )
}

export default SignIn