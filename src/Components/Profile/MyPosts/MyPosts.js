import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.js';
//import {addPostActionCreator,updateNewPostTextActionCreator} from './../../Redux/profile-reducer';





const MyPosts =(props)=>{
    
    
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    
    let newPostElement = React.createRef();

    let onAddPost =()=>{
        //props.addPost();
        //let text = newPostElement.current.value;
        //props.dispatch();
        props.addPost();
        
    }
    let onPostChange =()=>{
        let text = newPostElement.current.value;
        
         //let action = updateNewPostTextActionCreator(text);
        //props.dispatch(action);
        props.updateNewPostText(text);
        
    }
    
    return ( <div>
                                        
        <div className={classes.form__block}>
            <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={classes.TextEdit}/></div>
        <button onClick ={onAddPost}>Add</button>
         </div>
                                        
       <div> 
        {postsElements};2
        
        </div>
        
        
        </div>
       
        
        )
}
        

export default MyPosts;