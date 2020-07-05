import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator,updateNewMessageBodyCreator} from './../../Components/Redux/dialogs-reducer';
import Dialogs from './Dialogs';
//import StoreContext from "../../StoreContext";
import {connect} from 'react-redux';


let mapStateToProps = (state) =>{
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage:() =>{
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;







