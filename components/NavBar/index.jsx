import { Children, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";

import { routes } from "@/utils/routes";
import Image from "next/image";
import Logo from "@assets/new_logo.svg";

import styles from "./styles.module.scss";
import { RootLayoutContext } from "@/app/layout";
import Link from "next/link";
import { setCookie } from "@/utils/cookies";

function NavBar() {
  const {isSignedIn, clearSession} = useContext(RootLayoutContext);
  const router = useRouter();
  const pathname = usePathname();
  const pageName = pathname;

  const handleRouting = (route) => {
    router.push(route);
    console.log("debug routes!", route);
  };

  const hideLoginCheck = (routeName) => {
    const hideForPages = ["dashboard"];
    return hideForPages.includes(pageName) && routeName === "login";
  };

  const handleLogin = (e)=> {
    if(isSignedIn)
    {
      e.stopPropagation();
      e.preventDefault();
      clearSession();
      setCookie("adminLogin","");
      router.replace('/ui-factory/home');
    }
  }

  return (
    <div className={styles.main}>
      <ul className={styles.list}>
        {Children.toArray(
          routes.map((item) => {
            const routeName = item.route;
            //  const hideNavLink = hideLoginCheck(routeName);
            //  return hideNavLink ? null :
            return (
              <li
                onClick={() => handleRouting(item.route)}
                className={
                  pageName === routeName ? styles.active : styles.listItem
                }
              >
                {item.name}
              </li>
            );
          })
        )}
        <Link href='/ui-factory/signin' style={{textDecoration: 'none', color: '#fff'}} onClick={handleLogin}>
          <div className={pageName === '/ui-factory/signin' ? styles.active : styles.listItem}>
            {!isSignedIn ? 'Sign In' :'Sign Out'}
          </div>
        </Link>
      </ul>
      <Image
        src={Logo}
        alt="logo"
        width={150}
        height={150}
        className={styles.logo} onClick={() => {router.push("/ui-factory/home")}}
      />
    </div>
  );
}

export default NavBar;
