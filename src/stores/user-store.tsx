import {makeAutoObservable} from "mobx";

class UserStore {
    _isAuth: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    setIsAuth (bool: boolean) {
        this._isAuth = bool
    }

    get isAuth () {
        return this._isAuth
    }
}

export const userStore = new UserStore()

