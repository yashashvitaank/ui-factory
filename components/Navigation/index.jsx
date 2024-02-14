import { Children } from "react";
import { useRouter, usePathname } from "next/navigation";
import { routes } from "@/utils/routes";
import styles from "./styles.module.scss"

function Navigation() {
    const router = useRouter();
    const pathName = usePathname();
    const pageName = pathName.split("/").at(2);
    const handleRouting = (route) => {
        router.push(route);
    };
    console.log(routes);

  return (
    <div className={styles.navigation}>
        <ul className={styles.list}>
                {Children.toArray(
                    routes.map((item)=>{
                        <li className={styles.listItem} onClick={() => handleRouting(item.route)}>
                            {item.name}
                        </li>
                    })
                )}
        </ul>
    </div>
  )
}

export default Navigation