import React from 'react'
import "./styles/team.css"
import ProfileCard from './ProfileCard'

const Team = () => {
  return (
    <div className='team-div'>
      <h1>Team</h1>
      <p className='timepass'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus totam eaque corrupti aliquam vitae pariatur reiciendis minima commodi eum consequatur!</p>
      <ProfileCard/>
      <ProfileCard/>
      <ProfileCard/>
    </div>
  )
}

export default Team