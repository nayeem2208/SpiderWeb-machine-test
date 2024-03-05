import React from 'react'
import SideBar from './SideBar'
import EventNames from './EventNames'

function Body() {
  return (
    <div className='flex mx-12 mt-12'>
      <SideBar/>
      <EventNames/>
    </div>
  )
}

export default Body
