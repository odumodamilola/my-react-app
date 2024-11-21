import profilePic from './assets/profile.jpg'

function Card(){
      return(
         <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Damilola Peace</h2>
            <p className='card-text'>I help you develop softwares that will solve your desired problems</p>
         </div>
      );
}

export default Card