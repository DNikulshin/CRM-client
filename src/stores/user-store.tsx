import {makeAutoObservable} from "mobx";

class UserStore {
    _isAuth: boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth (bool: boolean) {
        this._isAuth = bool
    }

    isAuth () {
        return this._isAuth
    }
}

export const userStore = new UserStore()

