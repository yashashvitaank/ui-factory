"use client";
import { useState, useContext } from "react";
import Form from "@/components/Form";
import Link from "next/link";
import Image from "next/image";
import Logo from "@assets/icon.png";
import styles from "./styles.module.scss";
import { ApiRequest } from "@/utils/ajax";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setCookie } from "@/utils/cookies";
import { RootLayoutContext } from "@/app/layout";

function SignInForm(props) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {setSession} = useContext(RootLayoutContext);
  const inputField = [
    {
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      name: "email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      name: "password",
      min: "8",
    },
  ];

  const onSubmitHandler = async (formData) => {
    try {
      setIsSubmitting(true);
      const data = JSON.stringify(formData);
      // console.log("debug sign in data!!!!!", data);
      const response = await ApiRequest.post("/api/sign-in", data);
      console.log("Sign In Response", response);
      if (response.isAdmin) {
        setSession();
        setCookie("adminLogin", "true");
        setCookie("signedIn", "true", 30);
        router.replace("/ui-factory/admin-dashboard");
      }
      else if (response.isAdmin == false) {
        setSession();
        setCookie("signedIn", "true");
        router.replace("/ui-factory/add-component");
      }
      else if (response.status == 400) {
        toast.error("Please Check email or password and try again");
      }
    } catch (error) {
      toast.error("Invalid User Login :(");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Sign In</h1>
        <Image src={Logo} height={30} width={30} alt="logo" />
      </div>
      <p style={{ marginBottom: "1.5rem", fontSize:"1rem" }}>
        Welcome back frontend friend! Log in to contribute
      </p>
      <Form
        inputField={inputField}
        buttonName="Sign In"
        onSubmitHandler={onSubmitHandler}
        isProcessing={isSubmitting}
      />
      <span style={{paddingTop:".5rem", fontSize:".9rem"}}>Dont have an account? <Link href="/ui-factory/signup" style={{color:"#fff"}}>Sign Up Now</Link></span>
    </div>
  );
}

export default SignInForm;
