import { Link } from "react-router-dom";
import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FolderIcon from '@mui/icons-material/Folder';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonIcon from '@mui/icons-material/Person';
import StarBorder from '@mui/icons-material/StarBorder';
import './Sidebar.css';

const HRNavbar = () => {
    const [employeeOpen, setEmployeeOpen] = React.useState(false);
    const [jobApplicantsOpen, setJobApplicantsOpen] = React.useState(false);
    const [projectOpen,setProjectOpen] = React.useState(false)

    const handleEmployeeClick = () => {
        setEmployeeOpen(!employeeOpen);
    };

    const handleJobApplicantsClick = () => {
        setJobApplicantsOpen(!jobApplicantsOpen);
    };

    const handleProjectClick= () =>{
        setProjectOpen(!projectOpen);
    }
    return (
        <div style={{ width: 260, backgroundColor: '#000', color: '#fff', height: '100vh' }}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" className="text-center" style={{fontSize:'1.5rem', backgroundColor: '#000', color: '#fff' }}>
                        Company Name
                    </ListSubheader>
                }
            >
                <Divider style={{ backgroundColor: '#fff' }} />
                <div className="text-center" style={{ display: 'flex', alignItems: 'center', padding: 16 , backgroundColor:'#111'}}>
                    <Avatar alt="HR Name" src="/path/to/profile-pic.jpg" />
                    <div style={{ marginLeft: 16 }}>
                        <div>HR Name</div>
                    </div>
                </div>
                <Divider style={{ backgroundColor: '#fff' }} />
                <ListItemButton component={Link} to="/"  className="nav-item">
                    <ListItemIcon>
                        <DashboardIcon style={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>

                <ListItemButton onClick={handleEmployeeClick} className="nav-item">
                    <ListItemIcon>
                        <PeopleIcon style={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Employee Details" />
                    {employeeOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={employeeOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton component={Link} to="/all-employees" sx={{ pl: 4 }} >
                            <ListItemIcon>
                                <GroupIcon style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText primary="All Employees" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/add_employee" >
                            <ListItemIcon>
                                <PersonAddIcon style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText primary="Add Employee" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleJobApplicantsClick}>
                    <ListItemIcon>
                        <WorkIcon style={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Job Applicants" />
                    {jobApplicantsOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={jobApplicantsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} >
                            <ListItemIcon>
                                <PostAddIcon style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText primary="Job Post" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} >
                            <ListItemIcon>
                                <PersonIcon style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText primary="Candidates" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} >
                            <ListItemIcon>
                                <StarBorder style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText primary="ShortListed" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton >
                    <ListItemIcon>
                        <EventNoteIcon style={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Leaves" />
                </ListItemButton>

                <ListItemButton onClick={handleProjectClick} className="nav-item">
                    <ListItemIcon>
                        <FolderIcon style={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                    {projectOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={projectOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton component={Link} to="/projects" sx={{ pl: 4 }} >
                            <ListItemIcon>
                                <FolderIcon style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText primary="All Projects" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} component={Link} to="/add_project" >
                            <ListItemIcon>
                                <CreateNewFolderIcon style={{ color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText primary="Add Project" />
                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton >
                    <ListItemIcon>
                        <ExitToAppIcon style={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </List>
        </div>
    );
}

export default HRNavbar;
