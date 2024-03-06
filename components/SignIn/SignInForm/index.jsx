import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "./styles.module.scss"
import { useRouter } from "next/navigation";

function SignInForm(props) {
  const route = useRouter();
  const handleFormRoute = ()=>{
    route.push("/ui-factory/signup");
  }
  return (
    <div style={{display: "grid", placeItems: "center"}}>
      <form action="" className={styles.form}>
        <div className={styles.center}>
          <h2>Welcome Back Developer!</h2>
          <p>Contribute your code to this open source repository!</p>
        </div>
        <Input label="Email" type="email"  placeholder= "Enter your email" />
        <Input label="Password" type="password" placeholder="Enter your password" />
        <Button name="Sign In"/>
        <button onClick={handleFormRoute}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignInForm;
