import Form from "@/components/Form";
import Link from "next/link";
import Image from "next/image";
import Logo from "@assets/icon.png"
import styles from "./styles.module.scss"
import { ApiRequest } from "@/utils/ajax";
import { toast } from "react-toastify";

function SignInForm(props) {
  const inputField = [
    {label: "Email", type: "email", placeholder: "Enter your email", name: "email" },
    {label: "Password", type: "password", placeholder: "Enter your password", name: "password", min:"8"},
  ]

  const onSubmitHandler = async (formData) => {
    
    try {
      const data = JSON.stringify(formData)
      console.log("debug sign in data!!!!!", data);
      const response = await ApiRequest.post("/api/sign-in", data);
      if(response.status == 200){
        toast.success("Login Successful yayayayayay");
      }
      else if(response.status == 400)
      {
        toast.error("Please Check email or password and try again");
      }
    } catch (error) {
      toast.error("Invalid User Login :(");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Sign In</h1>
        <Image src={Logo} height={30} width={30} alt="logo"/>
      </div>
      <p style={{ marginBottom: "1.5rem"}}>Welcome back frontend friend! Log in to continue</p>
      <Form inputField={inputField} buttonName="Sign In" onSubmitHandler={onSubmitHandler} />
      <Link href="/ui-factory/signup" >Sign Up Now</Link>
    </div>
  );
}

export default SignInForm;
