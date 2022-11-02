
import { getAuthUserData } from "./auth-Reducer";

const SET_INTIALIZED_SUCCESS = 'SET-INTIALIZED-SUCCESS';


let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INTIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,

            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({

    type: SET_INTIALIZED_SUCCESS,
})

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthUserData());
   Promise.all([promise])
   .then( ()=>{
     dispatch(initializedSuccess());
   })
  
}

export default appReducer;