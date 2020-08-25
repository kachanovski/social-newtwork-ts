import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./redusers/profilePageReduser";
import { dialogsReducer } from "./redusers/dialogsPageReduser";
import usersReducer from "./redusers/usersReduser";
import authReducer from "./redusers/authReduser";
import thunkMiddleWare from "redux-thunk"
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type StoreReduxType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store
// @ts-ignore
window.store = store

