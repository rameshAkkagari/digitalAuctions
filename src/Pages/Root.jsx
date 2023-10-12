import Header from '../Components/Ul/HeaderContent/Header';
import { Outlet } from 'react-router-dom';
function Root() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Root