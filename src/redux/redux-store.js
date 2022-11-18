import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-Reducer";
import dialogsReducer from "./dialogs-Reducer";
import profileReducer from "./profile-Reducer";
import sidebarReducer from "./sidebar-Reducer";
import UsersReducer from "./users-Reducer";
import thunkMiddlewere from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-Reducer";

let reducers = combineReducers({
    profilePage :  profileReducer,
    dialogsPage : dialogsReducer,
    sidebar : sidebarReducer,
    usersPage : UsersReducer,
    auth : authReducer,
    form : formReducer,
    app: appReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddlewere) ));

// let store = createStore(reducers, applyMiddleware(thunkMiddlewere));
window.__store__=store;

export default store;
