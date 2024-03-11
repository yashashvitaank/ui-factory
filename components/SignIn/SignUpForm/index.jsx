import styles from "./styles.module.scss";
import Form from "@/components/Form";
import Link from "next/link";
import Logo from "@assets/icon.png";
import Image from "next/image";
import { toast } from "react-toastify";
import { ApiRequest } from "@/utils/ajax";
import { useRouter } from "next/navigation";

function SignUpForm(props) {
  const router = useRouter();
  const validateForm = (data) => {
    const { name, password, confirm_password } = data;
    if (!/^[a-zA-Z ]+$/.test(name)) {
      return { isValid: false, errorMessage: "Name can contain only letters!" };
    }
    if (password != confirm_password) {
      return {
        isValid: false,
        errorMessage: "Passwords do match. Please try again",
      };
    }
    if (password.length < 8) {
      return {
        isValid: false,
        errorMessage: "Password must be of 8 characters or long",
      };
    }
    return { isValid: true, errorMessage: "" };
  };

  const onSubmitHandler = async (formData) => {
    const { isValid, errorMessage } = validateForm(formData);
    if (!isValid) {
      return toast(errorMessage);
    }
    const data = JSON.stringify(formData);
    try {
      const resp = await ApiRequest.post("/api/sign-up", data);
      if (resp.status == 200) {
        toast.success("Welcome to the Factory, Please Login to Continue", {
          position: "top-center",
        });
        router.replace("/ui-factory/signin");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const inputField = [
    {
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      // pattern: "^[A-Za-z s]+$",
      title: "Please enter name in alphabets only",
      name: "name",
    },
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

    {
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter password to confirm",
      name: "confirm_password",
      min: "8",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Sign Up</h1>
        <Image src={Logo} height={30} width={30} alt="logo" />
      </div>
      <p style={{ marginBottom: "1.5rem" }}>
        Hello frontend friend! Contribute and showcase your talent to the world.{" "}
      </p>
      <Form
        inputField={inputField}
        buttonName="Sign Up"
        onSubmitHandler={onSubmitHandler}
      />
      <span>Already have an account? </span>
      <Link href="/ui-factory/signin">Sign In Now</Link>
    </div>
  );
}

export default SignUpForm;
