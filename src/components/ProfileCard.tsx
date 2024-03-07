import React from 'react'
import "./styles/profile.css"

const ProfileCard = () => {
  return (
    <div className='profile-div'>
        <div className='profile-left-side'>
        <img src={"https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"} />
        <p className='user-name'>John Smith</p>
        <p className='user-desi'>Designation</p>
        </div>
        <div className='user-desc-div'>
        <p className='user-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima alias fugit eum quasi amet cumque, aliquid magnam, earum quas dolorem quae eos sapiente repellendus ducimus doloribus vel dolores tempore soluta delectus ullam, maiores beatae illo suscipit. Officia, tenetur recusandae suscipit quam explicabo sapiente quisquam ducimus odio commodi minus atque sed?</p>
        </div>
    </div>
  )
}

export default ProfileCard