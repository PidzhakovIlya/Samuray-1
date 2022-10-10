import React from "react";
import { connect } from 'react-redux';


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});
export const WithAuthRedirect =(Component)=>{
    class RedirectComponent extends React.Component{
        render(){
            return <Component{ ...this.props}/>
        }
    }
    let ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectAuthRedirectComponent;
}