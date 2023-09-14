import {FC} from 'react'
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import {useUserStore} from '../../stores/user-store-zustand.tsx'

export const Navigation: FC = () => {
    const {isAuth, userName, userId} = useUserStore()
    return (
        <div className={styles.nav}>
            <div>
                <Link to="/">
                    LOGO
                </Link>

            </div>
            <div>
                <ul className={styles.list}>
                    {!isAuth &&
                        <li><Link to="/login">login</Link></li>
                    }

                    {isAuth &&
                        <li  className={styles.logout}>
                            <Link to="/login"
                                  onClick={() => {}}
                            >
                                logout
                            </Link>

                        </li>
                    }

                    {isAuth &&
                        <li
                            className={styles.userName}>
                            <Link to="/user">{userName}</Link>
                            <small>id: {userId}</small>
                        </li>
                    }

                </ul>
            </div>
        </div>
    )
}
