
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import loginImage from './assets/login.jpg'
import HRLoginPage from './pages/HR_Login';
import ManagerLoginPage from './pages/Manager_Login';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [showHR, setShowHR] = useState(false);
  const [showManager, setShowManager] = useState(false);

  const managerlogin = () =>{
    setShowManager(true);
  }

  const hrlogin = () => {
    setShowHR(true);
  };

  if (showHR) {
    return <HRLoginPage />;
  }

  if (showManager) {
    return <ManagerLoginPage/>;
  }

  return (
    <>
      <div className='row container-fluid'>
        
          <div className='col-lg-6' >
          <Image src={loginImage} fluid />
        
          </div>
          <div className='col-lg-6 p-5'>
            <div className='p-5'>
              <h3 className='mb-5'>Welcome</h3>
              <p className='mb-5'>Need an account? <a href="#">Sign up</a></p>
              <div>
                <Button className='me-5' variant="outline-primary" >Admin</Button>
                <Button className='me-5' onClick={hrlogin} variant="outline-primary" >HR</Button>
                <Button className='me-5' onClick={managerlogin} variant="outline-primary">Manager</Button>
                <Button className='me-5' variant="outline-primary">Employee</Button>
              </div>
            </div>
            
          </div> 
      </div>
      
    </>
  )
}

export default App
