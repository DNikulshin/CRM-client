import {makeAutoObservable} from "mobx";

class UserStore {
    _isAuth: boolean = false
    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth  () {
        setTimeout(async () => {
            const response =  await fetch('https://erp.silinet.net/api.php?key=0QlVFA0Q&cat=employee&action=check_pass&login=ndu&pass=4ZKr7QQ8')
            const {Result} = await response.json()

            // if(Result === 'OK') {
            //     console.log(Result)
            //     this._isAuth = true
            // }
            console.log(await this._isAuth)
        },1000)

    }
    get isAuth () {
        return this._isAuth
    }
}

export const userStore = new UserStore()

