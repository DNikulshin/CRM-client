import {FC, useEffect, useState} from 'react'
import {useUserStore} from '../../stores/user-store-zustand.tsx'
import {useNavigate } from 'react-router-dom'

export const LoginPage: FC = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {checkAuth, isAuth} = useUserStore()
    const handleClick =  () => {
        if(!login || !password) return
         checkAuth(login, password)
    }

    useEffect(() => {
        if(isAuth) {
            navigate('/')
        }
    }, [isAuth])

    return (
        <div>
            <h1>LoginPage</h1>
          <div>
              <input
                  type="text"
                  placeholder="enter login..."
                  onChange={e => setLogin(e.target.value)}
              />
              <input type="text"
                     placeholder="enter password..."
                     onChange={e => setPassword(e.target.value)}
              />
              <button onClick={handleClick}>login</button>
          </div>
        </div>
    )
}
