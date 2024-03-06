import { Children } from "react";
import { useRouter, usePathname } from "next/navigation";

import { routes } from "@/utils/routes";
import Image from "next/image";
import Logo from "@assets/new_logo.svg";

import styles from "./styles.module.scss";
function NavBar() {
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
      </ul>
      <Image src={Logo} alt="logo" width={150} height={150} className={styles.logo} />
      {/* <div className={styles.signOut}>
        {pathname === "/ui-factory/dashboard" ? "Sign Out" : ""}
      </div> */}
    </div>
  );
}

export default NavBar;
