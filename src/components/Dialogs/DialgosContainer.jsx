import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { sendMessageCreator,} from "../../redux/dialogs-Reducer";
import Dialogs from "./Dialgos";
import s from "./Dialogs.module.css"


// const setActive = navData => navData.isActive ? s.active : s.item;

// const DialgosContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addText = () => {
//                     store.dispatch(sendMessageCreator());
//                 };
//                 let onNewMessage = (body) => {
//                     store.dispatch(updatedMessageCreator(body));
//                 };
//                 return <Dialogs addText={addText}
//                     updatedMessageBody={onNewMessage}
//                     dialogsPage={state.dialogsPage} />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addText: (newMassageBody) => {
            dispatch(sendMessageCreator(newMassageBody))
        },
    }
}




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs);