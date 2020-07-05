


const ProfileInfo =()=>{
    return (
        <div>
        <div>
          <img className={classes.imgs} src='https://i1.wp.com/luxafrique.net/wp-content/uploads/2016/02/tesla-models-powerwall.jpg?fit=2121%2C986' />
              </div>
        <div className={classes.avatar}>
         <img src={props.profile.photos.large}/>
        </div>
    <div className={classes.inform}>
        <h1>Roman S.</h1>
        <p>Date of Birth: 2 january</p>
        <p>City : Kiev </p>
      </div>
    </div>
    );
    
}




const ProfileInfo =()=>{
    return (
        <div>
        <div>
          <img className={classes.imgs} src='https://i1.wp.com/luxafrique.net/wp-content/uploads/2016/02/tesla-models-powerwall.jpg?fit=2121%2C986' />
              </div>
        <div className={classes.avatar}>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcylNcrePAZQNakgMHCEZZXJ6x4M1tMkePhzlSLPw3Tdw0jkse&usqp=CAU.jpg' />
        </div>
    <div className={classes.inform}>
        <h1>Roman S.</h1>
        <p>Date of Birth: 2 january</p>
        <p>City : Kiev </p>
      </div>
    </div>
    );
    
}