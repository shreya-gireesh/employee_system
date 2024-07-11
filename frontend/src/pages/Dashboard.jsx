import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Dashboard = () =>{
    return(
        <>
        <div>
            <h3>Welcome, HR!</h3>
            <Breadcrumb>
                <Breadcrumb.Item active href="#">Dashboard</Breadcrumb.Item>
            </Breadcrumb>
        </div>
        </>
    )
}
export default Dashboard