import {Navigate, Route, Routes} from 'react-router-dom'
import {LoginPage} from "../pages/LoginPage"
import {RegistrationPage} from "../pages/RegisrationPage"
import {HomePage} from "../pages/HomePage";
import {UserPage} from "../pages/UserPage";
import {userStore} from '../stores/user-store.tsx'
import {useUserStore} from '../stores/user-store-zustand.tsx'

// interface routesProps {
//     isAuthenticated: boolean
// }

export const useRoutes = () => {
    const {isAuth} = useUserStore()
if(isAuth) {
        return (
            <Routes>
                    <Route path="/"
                           element={<HomePage/>}
                    >
                    </Route>
                    <Route path="/login"
                           element={<LoginPage/>}
                    >
                    </Route>
                    <Route path="/registration"
                           element={<RegistrationPage/>}
                    >
                    </Route>
                    <Route path="/user"
                           element={<UserPage/>}
                    >
                    </Route>

                    <Route path="*"
                           element={<Navigate to="/" replace/>}
                    >
                    </Route>
            </Routes>
        )
}

    return (
        <Routes>
            <Route path="/login"
                   element={<LoginPage/>}
            >
            </Route>
            <Route path="/registration"
                   element={<RegistrationPage/>}
            >
            </Route>
            <Route path="*"
                   element={<Navigate to="/login" replace/>}
            >
            </Route>
        </Routes>
    )

}
