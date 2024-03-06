import Button from '@/components/Button'
import Input from '@/components/Input'
import { Children } from 'react'
import styles from "./styles.module.scss"
import { useRouter } from 'next/navigation'

function SignUpForm(props) {
  const route = useRouter();
  const handleFormRoute = ()=>{
    route.push("/ui-factory/signin");
  }
    const inputField = [
        {label: "Name", type: "text", placeholder:"Enter your name", pattern: "^[A-Za-z \s]+$", title: "Please enter name in alphabets only"},
        {label: "Email", type: "email", placeholder: "Enter your email" },
        {label: "Password", type: "password", placeholder: "Enter your password"},
        {label: "Confirm Password", type: "password", placeholder: "Enter password to confirm"}
    ]
  return (
    <div style={{display: "grid", placeItems: "center"}}>
       <form action="" className={styles.form}>
        <div className={styles.center}>
          <h2>Sign Up as Developer</h2>
          <p>Contribute your code to this open source repository!</p>
        </div>
        {Children.toArray(
            inputField.map((attributes)=>{
                return(
                    <Input {...attributes}/>
                )
            })
        )}
        <Button
          name="Sign In"
        />
        <button onClick={handleFormRoute}>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm