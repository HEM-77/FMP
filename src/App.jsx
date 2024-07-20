import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'


const App = () => {
  return (
    <div className='h-screen bg-black '>
      <div className='h-[90%] flex'>
       <Sidebar />
        <Display />
      </div>
     <Player />
    </div>
  )
}

export default App
 
//  <Sidebar className='[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '  />
// <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
// <div className='flex'>


