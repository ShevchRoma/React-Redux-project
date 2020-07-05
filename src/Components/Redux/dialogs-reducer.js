const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: 
            [ {id: 1,name: 'Alex'},
          {id: 2,name: 'Alexandr'},
          {id: 3,name: 'Sveta'},
          {id: 4,name: 'Sasha'},
          {id: 5,name: 'John'},
          {id: 6,name: 'Viktor'},
          {id: 7,name: 'Valera'},
          {id: 8,name: 'Kate'}],
        
        messagesData: 
            [{id: 1,message: 'Hi!'},
          {id: 2,message: 'How are things?'},
          {id: 3,message: 'How much is youre car?'},
          {id: 4,message: 'Where are you?'}],
        newMessageBody: ""
};

const dialogReducer =(state = initialState, action) =>{
    
     let stateCopy ={...state,
                     //messages: [...state.messagesData]
                    };
     //stateCopy.messagesData = [...state.messagesData];
       switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
                     
           case SEND_MESSAGE:
            let body = state.newMessageBody;
            
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData,{id: 5, message: body}]
            };
            
            return stateCopy;
         default:return state;
}
    
    
    
}

export const sendMessageCreator =()=>({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body)=>
({type: UPDATE_NEW_MESSAGE_BODY,body:body})

export default dialogReducer;