import {Navigate, Route, Routes} from 'react-router-dom'
import {LoginPage} from "../pages/LoginPage"
import {RegistrationPage} from "../pages/RegisrationPage"
import {HomePage} from "../pages/HomePage";
import {UserPage} from "../pages/UserPage";

// interface routesProps {
//     isAuthenticated: boolean
// }

export const useRoutes = (isAuth : boolean) => {

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