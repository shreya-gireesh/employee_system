import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"

const ShowProject = () =>{
    const [project, setProject] = useState({})
    const {id} = useParams()

    const getProject = async()=>{
        try{
            const response = await axios.get(`http://127.0.0.1:8000/get_project/${id}`)
            setProject(response.data)
        }catch(error){
            if (error.response) {
                console.error(`Error Status Code: ${error.response.status}`);
                console.error(error.response.data);
            } else {
                console.error('There was a problem with the axios request:', error.message);
            }
        }
    }

    useEffect = (()=>{
        getProject()
    },[])

    return(
        <>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h3>{project.project_name}</h3>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item >
                        Project
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                <Link className="btn btn-primary" to="/add_employee" style={{fontSize: '18px',fontWeight: 500, borderRadius: '25px'}} >Add Employee</Link>
            </div>
        </div>
        <div>
            <Row>
                <Col md={8}>
                    <div>
                        <h3>{project.project_name}</h3>
                        <p>{project.project_description}</p>
                    </div>
                </Col>
                <Col md={4}>
                <span>Start Date: {project.project_start_date}</span>
                <span>End Date: {project.project_end_date}</span>
                </Col>
            </Row>
        </div>
        </>
    )
}
export default ShowProject