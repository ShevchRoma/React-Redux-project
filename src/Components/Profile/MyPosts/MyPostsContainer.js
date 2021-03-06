import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../Redux/profile-reducer';
import MyPosts from './MyPosts';
//import StoreContext from './../../../StoreContext';
import {connect} from 'react-redux';


let mapStateToProps= (state) =>{
    return {
             posts: state.profilePage.posts,
             newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch)=>{
    return { addPost: ()=>{dispatch(addPostActionCreator());
                         },
             updateNewPostText: (text)=>{
                      let action = updateNewPostTextActionCreator(text);
                      dispatch(action);
                }
           }
    }

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;