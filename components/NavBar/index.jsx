import { Children } from "react";
import { useRouter, usePathname } from "next/navigation";

import { routes } from "@/utils/routes";

import styles from "./styles.module.scss";
function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const pageName = pathname.split("/").at(2);
  const handleRouting = (route) => {
    router.push(route);
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
            const routeName = item.route.split("/").at(2);
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
      {/* <div className={styles.signOut}>
        {pathname === "/ui-factory/dashboard" ? "Sign Out" : ""}
      </div> */}
    </div>
  );
}

export default NavBar;
