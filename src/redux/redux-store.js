import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-Reducer";
import dialogsReducer from "./Dialogs-Reducer";
import profileReducer from "./Profile-Reducer";
import sidebarReducer from "./Sidebar-Reducer";
import UsersReducer from "./UsersReducer";
import thunkMiddlewere from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App-Reducer";

let reducers = combineReducers({
    profilePage :  profileReducer,
    dialogsPage : dialogsReducer,
    sidebar : sidebarReducer,
    usersPage : UsersReducer,
    auth : authReducer,
    form : formReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddlewere));

window.store = store;

export default store;
