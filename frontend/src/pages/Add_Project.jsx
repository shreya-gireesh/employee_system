import { useState, useEffect } from 'react';
import { Row, Col, Button, Form, FloatingLabel, Breadcrumb } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GetManager } from '../api/get_manager';
import { GetEmployee } from '../api/get_employee';

const AddProject = () =>{
    const [project, setProject] = useState({
        project_name: '',
        project_desc: '',
        project_manager: '',
        project_start_date: '',
        project_end_date: '',
        project_status:'',
        priority_level: '',
        assigned_employees: ''
    })

    const [Managers, setManager] = useState([])

    const [Employees, setEmp] = useState([])

    const navigate = useNavigate()

    const fetchManager = async () => {
        try {
            const data = await GetManager();
            setManager(data);
        } catch (error) {
            console.error("Failed to fetch:", error);
        }
    };

    const fetchEmployee = async() =>{
        try{
            const emp = await GetEmployee();
            setEmp(emp);
        } catch (error) {
            console.error("Failed to fetch:", error);
        }
    };

    const AddProject = async() =>{
        try{
            const response = await axios.post(`http://127.0.0.1:8000/add_projects`, project, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response.data);
            navigate('/all-employees')
        }catch (error) {
            if (error.response) {
                console.error(`Error Status Code: ${error.response.status}`);
                console.error(error.response.data);
            } else {
                console.error('There was a problem with the axios request:', error.message);
            }
        }
    }

    const handleChange = (e) =>{
        let name = e.target.name
        let value = e.target.value
        let data = {...project, [name]:value}
        setProject(data)
        console.log(data)
    }

    const submitProject = () =>{
        console.log(project)
        AddProject()
    }

    useEffect(() => {
        fetchManager();
        fetchEmployee();
    }, []); 

    return(
        <>
        <div>
            <h3>Add Employee</h3>
            <Breadcrumb>
                    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item >
                        Project
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Add Projects</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div>
        <Form className="custom-form">
      <Row>
        <Col>
        <FloatingLabel
            controlId="projectname"
            label="Project Name"
            className="mb-3"
            onChange={handleChange}
        >
            <Form.Control type="text" name='project_name' placeholder="John" />
        </FloatingLabel>
        </Col>
        <Col>
        <FloatingLabel controlId="manager" label="Project Manager" onChange={handleChange}>
            <Form.Select name='project_manager' aria-label="Floating label select example">
                <option>Select</option>
                {Managers.map((manager) => (
                    <option key={manager.manager_id} value={manager.manager_id}>{manager.manager_first_name} {manager.manager_last_name}</option>
                ))}
            </Form.Select>
        </FloatingLabel>
        </Col>
      </Row>
      <Row>
        
        <Col>
        <FloatingLabel
            controlId="start_date"
            label="Start Date"
            className="mb-3"
            onChange={handleChange}
        >
            <Form.Control type="date" name='project_start_date' placeholder='' />
        </FloatingLabel>
        </Col>
        <Col>
        <FloatingLabel
            controlId="end_date"
            label="End Date"
            className="mb-3"
            onChange={handleChange}
        >
            <Form.Control type="date" name='project_end_date' placeholder='' />
        </FloatingLabel>
        </Col>
      </Row>
      <Row>
        
        <Col>
        <FloatingLabel
            controlId="status"
            label="Project Status"
            className="mb-3"
            onChange={handleChange}
        >
           <Form.Select name='project_status' aria-label="Floating label select example">
                <option>Select</option>
                <option value="Planned">Planned</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
            </Form.Select>
        </FloatingLabel>
        </Col>
        <Col>
        <FloatingLabel controlId="priority" label="Priority" onChange={handleChange}>
            <Form.Select name='priority_level' aria-label="Floating label select example">
                <option>Select</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </Form.Select>
        </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
        <FloatingLabel controlId="assigned_employees" label="Team Members" onChange={handleChange}>
            <Form.Select name='assigned_employees' aria-label="Floating label select example" multiple>
            <option>Select Employees</option>
            {Employees.map(employee => (
                <option key={employee.employee_id} value={employee.employee_id}>
                    {employee.employee_firstname} {employee.employee_lastname}
                </option>
            ))}
            </Form.Select>
        </FloatingLabel>
        </Col>
        <Col>
        <FloatingLabel
            controlId="lprojectdesc"
            label="Description"
            className="mb-3"
            onChange={handleChange}
        >
            <Form.Control as="textarea" type="text" name='project_desc' placeholder="Doe" style={{ height: '100px' }}/>
        </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button className="btn-custom" onClick={submitProject} type="button">Submit</Button>
        </Col>
      </Row>
    </Form>
        </div>
        </>
    )
}
export default AddProject;