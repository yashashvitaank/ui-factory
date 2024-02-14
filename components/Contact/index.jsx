import Image from "next/image";
import ContactForm from "./ContactForm";
import LinkedInIcon from "@assets/linkedin.svg";
import PhoneIcon from "@assets/phone.svg";
import EmailIcon from "@assets/email.svg";

import styles from "./styles.module.scss";
import { Children } from "react";
import ContactDetail from "./ContactDetail";

function Contact() {
  const details = [
    {
      name: "LinkedIn",
      imgSrc: LinkedInIcon,
      info: "Yashashvi Taank",
      href: "https://www.linkedin.com/in/yashashvi-taank-41112b23a/",
      paddingBottom: "10px",
    },
    {
      name: "Phone",
      imgSrc: PhoneIcon,
      info: "+91 9755066036",
      href: "tel:9755066036",
    },
    {
      name: "Email",
      imgSrc: EmailIcon,
      info: "yashashvitaank20@gmail.com",
      href: "mailto:yashashvitaank20@gmail.com",
    },
  ];

  return (
    <div className={styles.parentContainer}>
      <div className={styles.upperContainer}>
        <div className={styles.contactDiv}>
          <div className={styles.contactHeading}>
            <p className={styles.heading}>Contact Us</p>
            <p
              style={{
                margin: "0%",
                padding: ".5rem 0 4rem 0",
                letterSpacing: "2px",
              }}
            >
              <strong>Any questions or remarks? Just message us!</strong>
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <div className={styles.lowerContainer}></div>

      <div className={styles.detailsContainer}>
        {Children.toArray(
          details.map((detail) => {
            return <ContactDetail {...detail} />;
          })
        )}
      </div>
    </div>
  );
}

export default Contact;
