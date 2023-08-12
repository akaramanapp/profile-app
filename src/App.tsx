
import Header from './Components/Header'
import Introduction from './Components/Introduction'

import ProfilePic from './Components/ProfilePic'
import About from './Components/About'

import SideBar from './Components/SideBar'

function App() {
 
 
  return (
    <div className='w-screen'>
      <Header/>
      <SideBar/>
      <div className='ml-[90px]  
      grid grid-cols-1 md:grid-cols-3
      '>
        <div className='col-span-2 p-5 mt-[90px]'>
            <Introduction/>
            <About/>
         
        </div>
        <div className='hidden md:block'>
          <ProfilePic/>
       
        </div>
      </div>
      
    </div>
  )
}

export default App