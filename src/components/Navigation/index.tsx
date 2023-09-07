import {FC} from 'react'
import styles from './index.module.scss'
import {Link} from "react-router-dom";

export const Navigation: FC = () => {
    return (
        <div className={styles.nav}>
            <div>
                <Link to="/">
                    LOGO
                </Link>

            </div>
            <div>
                <ul className={styles.list}>
                    <li><Link to="/login">login</Link></li>
                    <li>
                        <Link to="/login"
                           onClick={() => {}}
                        >
                            logout
                        </Link>

                    </li>
                    <li
                        className={styles.userName}>
                        <Link to="/user">username</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
