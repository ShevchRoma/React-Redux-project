import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.js';
import Message from './Message/Message.js';
//import {sendMessageCreator, updateNewMessageBodyCreator} from "./../../Components/Redux/dialogs-reducer";

 

const Dialogs = (props)=> {
    
    let state = props.dialogPage;
    
    let messagesElements = state.messagesData.map(message =><Message message={message.message} key={message.id} /> );
                                            
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );
    
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick=()=>{
        props.sendMessage();
        
    }
    let onNewMessageChange = (e)=>{
       let body = e.target.value;
        props.updateNewMessageBody(body);
        //props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    
        
    
    return(
        <div className={classes.dialogs}>
    
        <div>
          <div className={classes.dialogsItems}>
                                          
                            {dialogsElements}
            
              </div>
        </div>
               <div className={classes.messages}>
                         <div>{messagesElements}</div>
                         <div className ={classes.area}>
                              <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                             <div><button className={classes.b} onClick={onSendMessageClick}>Send</button></div>
                                                        </div>
                   
                   
               </div>
    </div>
    );
    
    
    
    
}

export default Dialogs;
