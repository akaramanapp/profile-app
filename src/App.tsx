import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          profile data
        </div>
        <div>
          picture
        </div>
      </div>
    </>
  )
}

export default App
