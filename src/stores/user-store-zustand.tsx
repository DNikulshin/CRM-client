import {create} from 'zustand'
//  import shallow from 'zustand/shallow'
import {persist} from 'zustand/middleware'
import axios from 'axios'

const instanceAxios = axios.create({
    baseURL: import.meta.API_URL,
    params: {
        key: import.meta.API_KEY
    }
})

interface userState {
    isAuth: boolean
    res: {
        Result: string | null
    }
    userName: string | null
    userId: string | null
    checkAuth: (login: string, password: string) => void
    cat?: string
    action?: string

}

export const useUserStore = create<userState>()
persist(
    (set, get) => ({
        isAuth: false,
        res: {
            Result: ''
        },
        userName: null,
        userId: '',
        checkAuth: async (login: string, pass: string) => {
            try {
                const responseCheckAuth = await instanceAxios('', {
                        params: {
                            cat: 'employee',
                            action: 'check_pass',
                            login,
                            pass
                        }
                    })
                set({res: responseCheckAuth.data})
                set({userName: login})
                if (responseCheckAuth.status !== 200) throw new Error('Что-то пошло не так')
                const {Result} = get().res
                if (Result === 'OK') {
                    set({isAuth: true})
                }

                const responseGetUserId = await instanceAxios('', {
                    params: {
                        cat: 'employee',
                        action: 'get_employee_id',
                        'data_typer': 'login',
                        'data_value': login
                    }
                })
                const {id} = responseGetUserId.data
                set({userId: id})
            } catch (e) {
                console.log(e)
            }
        },
    }), {name: 'authStore'})
