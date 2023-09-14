import {Navigation} from "./components/Navigation"
import {useRoutes} from "./routes/routes.tsx"
import styles from './index.module.scss'
import {useEffect} from 'react'
import {useUserStore} from './stores/user-store-zustand.tsx'

export const App = () =>{
    const routes = useRoutes()

    console.log('render')
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
}
