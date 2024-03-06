import { Route,Routes } from 'react-router-dom'
import EventRequests from '../Components/EventRequest'
import EventNames from '../Components/EventNames'


function Router() {
  return (
    <Routes>
        <Route path='/' element={<EventRequests/>}/>
        <Route path='/Events' element={<EventNames/>}/>
    </Routes>
  )
}

export default Router
