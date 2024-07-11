import { useState, useEffect } from "react"
import * as React from 'react';
import { Row, Col, Card, Dropdown } from "react-bootstrap";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Projects = () =>{
    const [Projects, setProjects] = useState([])

    const [editOpen, setEditOpen] = React.useState(false);

    const handleEditClick = () => {
        setEditOpen(!editOpen);
    };

    const showAllProj = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/all_project');
            setProjects(response.data);
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
        showAllProj();
    },[]);

    return(
        <>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h3>Projects</h3>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                    
                    <Breadcrumb.Item active>Projects</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                <Link className="btn btn-primary" to="/add_project" style={{fontSize: '18px',fontWeight: 500, borderRadius: '25px'}} >Add Project</Link>
            </div>
        </div>
        <div>
        <Row xs={1} md={4} className="g-4">
            {Projects.map((project)=>(
                <Col key={project.project_id}>
                    <Card >
                        <Card.Body >
                        <ListItemButton onClick={handleEditClick} className="nav-item">
                            <ListItemIcon>
                                <MoreVertIcon style={{ color: '#000' }} />
                            </ListItemIcon>
                           
                        </ListItemButton>
                        <Collapse in={editOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton  sx={{ pl: 4 }} >
                                    <ListItemIcon>
                                        <EditIcon style={{ color: '#000' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Edit" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}  >
                                    <ListItemIcon>
                                        <DeleteIcon style={{ color: '#000' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Delete" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <div>
                            <Card.Title>
                                {project.project_name}
                            </Card.Title>
                            <span>10 open tasks, 0 completed task</span>
                        </div>
                        
                        <Card.Text>
                            <div className="mt-3">
                                {project.project_desc}
                            </div>
                            
                            <div className="mt-3">
                                <h6>Deadline:</h6>
                                <p>{project.project_end_date}</p>
                            </div>
                            <div className="mt-3">
                                <h6>Project Manager:</h6>
                                <p>{project.project_manager}</p>
                            </div>
                            <div>
                                <h6>Project Team:</h6>
                                <p>{project.project_team}</p>
                            </div>
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
export default Projects 