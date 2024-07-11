import { useState, useEffect } from 'react';
import { Row, Col, Button, Form, FloatingLabel, Breadcrumb } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Department} from '../api/get_dept';


const AddEmp = () =>{
    const [Emp, setEmp] = useState({
        employee_firstname: '',
        employee_lastname: '',
        employee_gender: '',
        employee_email: '',
        employee_phone: '',
        employee_password:'',
        employee_hire_date: '',
        employee_department: '',
        employee_position: ''
    })

    const navigate = useNavigate()

    const [Dept, setDept] = useState([])

    const fetchDepartments = async () => {
        try {
            const data = await Department();
            setDept(data);
        } catch (error) {
            console.error("Failed to fetch departments:", error);
        }
    };

    const AddEmp = async () =>{
        try{
            const response = await axios.post(`http://127.0.0.1:8000/add_employee`, Emp, {
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

    useEffect(() => {
        fetchDepartments();
    }, []); 

    const handleChange = (e) =>{
        let name = e.target.name
        let value = e.target.value
        let data = {...Emp, [name]: value }
        setEmp(data)
        console.log(data)
    }

    const submitEmp = () =>{
        console.log(Emp)
        AddEmp()
    }
    return(
        <>
        <div>
            <h3>Add Employee</h3>
            <Breadcrumb>
                    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item >
                        Employee Details
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Add Employees</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        <div>
        <Form className="custom-form">
      <Row>
        <Col>
        <FloatingLabel
            controlId="firstname"
            label="First Name"
            className="mb-3"
            onChange={handleChange}
        >
            <Form.Control type="text" name='employee_firstname' placeholder="John" />
        </FloatingLabel>
        </Col>
        <Col>
        <FloatingLabel
            controlId="lastname"
            label="Last Name"
            className="mb-3"
            onChange={handleChange}
        >
            <Form.Control type="text" name='employee_lastname' placeholder="Doe" />
        </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
        <FloatingLabel controlId="gender" label="Gender" onChange={handleChange}>
            <Form.Select name='employee_gender' aria-label="Floating label select example">
                <option>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </Form.Select>
        </FloatingLabel>
        </Col>
        <Col>
        <FloatingLabel
            controlId="phoneno"
            label="Mobile Number"
            className="mb-3"
            onChange={handleChange}
        >
            <Form.Control type="text" name='employee_phone' placeholder='9090909090' />
        </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
        <FloatingLabel
            controlId="email"
            label="Email"
            className="mb-3"
            onChange={handleChange}
        >
            <Form.Control type="email" name='employee_email' placeholder='example@gmail.com' />
        </FloatingLabel>
        </Col>
        <Col>
        <FloatingLabel
            controlId="password"
            label="Password"
            className="mb-3"
            onChange={handleChange}
        >
            <Form.Control type="password" name='employee_password' placeholder='12345678'/>
        </FloatingLabel>
        </Col>
        <Col>
        <FloatingLabel
            controlId="hire_date"
            label="Hire Date"
            className="mb-3"
            onChange={handleChange}
        >
            <Form.Control type="date" name='employee_hire_date' placeholder='12345678'/>
        </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
        <FloatingLabel
            controlId="designation"
            label="Designation"
            className="mb-3"
            onChange={handleChange}
        >
            <Form.Control type="text" name='employee_position' placeholder='Web Developer'/>
        </FloatingLabel>
        </Col>
        <Col>
        <FloatingLabel controlId="department" label="Department" onChange={handleChange}>
            <Form.Select name='employee_department' aria-label="Floating label select example">
                <option>Select Department</option>
                {Dept.map((department) => (
                    <option key={department.department_id} value={department.department_id}>{department.department_name}</option>
                ))}
            </Form.Select>
        </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button className="btn-custom" onClick={submitEmp} type="button">Submit</Button>
        </Col>
      </Row>
    </Form>
        </div>
        </>
    )
}
export default AddEmp