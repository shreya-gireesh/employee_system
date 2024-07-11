import { Route, Routes } from "react-router-dom";
import HRNavbar from "../components/HR_Navbar";
import Dashboard from "./Dashboard";
import AllEmployee from "./All_Employee";
import AddEmp from "./Add_Employee";
import Projects from "./Projects";
import AddProject from "./Add_Project";
import MainNav from "../components/main_nav";

const HRLoginPage = () =>{
    return(
        <>
        <div className='row container-fluid'style={{backgroundColor:'#f7f7f7'}}>
        
        <div className='col-md-3 col-lg-2' style={{backgroundColor:'#000'}}>
        <HRNavbar/>
      
        </div>
        <div className='col-md-9 col-lg-10'>
          <MainNav/>
        <Routes>  
          <Route path='/' element={<Dashboard />}/>
          <Route path='/all-employees' element={<AllEmployee />}/>
          <Route path='/add_employee' element={<AddEmp />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/add_project' element={<AddProject />}/>
        </Routes>
        </div>
      
    </div>
        </>
    )
}
export default HRLoginPage;