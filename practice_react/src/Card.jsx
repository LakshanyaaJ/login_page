import profilePic from './assets/download.jpg'

function Card(){
    return(
        <div>
            <img src={profilePic} alt="Picture" />
             <h2>Panda</h2>
             <p>I Do Sleep Always</p>
        </div>
    );
}

export default Card