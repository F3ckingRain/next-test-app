import routes from "@/router/routes";
import Link from "next/link";
import styles from './Router.module.css'
import {useRouter} from "next/router";
const Router = () => {

  const {push} = useRouter()
  const clickHandler = (href: string) => {
    return push(href)
  }

  return (
    <div className={styles.navigation}>
      <ul className={styles.navbar}>
        {routes.map((el,index) => (
          <li
            key={`${el}_${index}`}
            className={styles.navbar__item}
            onClick={() => clickHandler(el.href)}
          >
            <Link href={el.href} >
              {el.name}
            </Link>
          </li>)
        )}
      </ul>
    </div>
  )
}

export default Router;