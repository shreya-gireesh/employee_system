import { Route, Routes } from "react-router-dom";
import ManagerNav from "../components/Manager_Navbar";
import Dashboard from "./Dashboard";
import AllEmployee from "./All_Employee";
import AddEmp from "./Add_Employee";
import Projects from "./Projects";
import MainNav from "../components/main_nav";

const ManagerLoginPage = () =>{
    return(
        <>
        <div className='row container-fluid'style={{backgroundColor:'#f7f7f7'}}>
        
        <div className='col-md-3 col-lg-2' style={{backgroundColor:'#000'}}>
        <ManagerNav/>
      
        </div>
        <div className='col-md-9 col-lg-10'>
          <MainNav/>
        <Routes>  
          <Route path='/' element={<Dashboard />}/>
          <Route path='/all-employees' element={<AllEmployee />}/>
          <Route path='/add_employee' element={<AddEmp />}/>
          <Route path='/projects' element={<Projects />}/>
        </Routes>
        </div>
      
    </div>
        </>
    )
}
export default ManagerLoginPage;