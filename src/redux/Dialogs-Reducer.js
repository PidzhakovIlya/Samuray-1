const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'hy' },
        { id: 2, message: 'How are your?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Danya' },
    ],
   

    dialogs: [
        { id: 1, name: 'Ilya', img: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU" alt="" /> },
        { id: 2, name: 'Dima', img: <img src="https://i.ytimg.com/vi/a0Xaa9qjgpQ/maxresdefault.jpg" alt="" /> },
        { id: 3, name: 'Egor', img: <img src="data:image/jpeg;base64,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" alt="" /> },
        { id: 4, name: 'Oleg' },
        { id: 5, name: 'Inessa' },
        { id: 6, name: 'Danya' },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) { 
        case SEND_MESSAGE:
            let body = action.newMassageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: body, }],

            }

        default:
            return state;
    }

}

export const sendMessageCreator = (newMassageBody) => {
    return {
        type: SEND_MESSAGE,
        newMassageBody
    }
};

export default dialogsReducer;