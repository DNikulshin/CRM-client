import {Navigation} from "./components/Navigation"
import {useRoutes} from "./routes/routes.tsx"
import styles from './index.module.scss'
import {userStore} from "./stores/user-store.tsx";
import {observer} from "mobx-react-lite";

export const App = observer(() =>{

    const {_isAuth} = userStore
    const routes = useRoutes(_isAuth)

    return (
        <>
            <div className={styles.app}>
                <Navigation/>
                <div className={styles.container}>
                    {routes}
                </div>
            </div>
        </>


    )
})
