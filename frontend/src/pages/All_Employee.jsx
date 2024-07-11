import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Row, Col, Card, Button, Form, FloatingLabel } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllEmployee = () =>{
    const [Emp, setEmp] = useState([])

    const showAll = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/all_employee');
            setEmp(response.data);
        } catch (error) {
            if (error.response) {
                console.error(`Error Status Code: ${error.response.status}`);
                console.error(error.response.data);
            } else {
                console.error('There was a problem with the axios request:', error.message);
            }
        }
    };

    useEffect(()=>{
        showAll();
    },[]);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return(
        <>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h3>Employees</h3>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item >
                        Employee Details
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>All Employees</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                <Link className="btn btn-primary" to="/add_employee" style={{fontSize: '18px',fontWeight: 500, borderRadius: '25px'}} >Add Employee</Link>
            </div>
        </div>
        <div>
        <Form>
            <Row>
                <Col>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Employee ID"
                    className="mb-3"
                >
                    <Form.Control type="text" name='empid' placeholder="EMP001" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Employee Name"
                    className="mb-3"
                >
                    <Form.Control type="text" name='empname' placeholder="John Does" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel controlId="floatingSelect" label="Designation">
                    <Form.Select name='empposition' aria-label="Floating label select example">
                        <option>Select Designation</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FloatingLabel>
                </Col>
                <Col>
                    <Button style={{width:"100%", height:"calc(3.5rem + 2px)",fontSize: '18px',fontWeight: 500}}>SEARCH</Button>
                </Col>
            </Row>
        </Form>
        </div>
        <div>
        <Row xs={1} md={4} className="g-4">
            {Emp.map((emp)=>(
                <Col key={emp.employee_id}>
                    <Card >
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                        <Avatar className='mb-2'  alt={emp.employee_firstname} src="/path/to/profile-pic.jpg" sx={{ bgcolor: getRandomColor()}} style={{width:'60px', height:'60px', fontSize: '2rem'}} />
                        <Card.Title>{emp.employee_firstname} {emp.employee_lastname}</Card.Title>
                        <Card.Text>
                            {emp.employee_position}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </div>
        </>
    )
}
export default AllEmployee