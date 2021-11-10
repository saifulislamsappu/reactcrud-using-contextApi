
import React from 'react';
import "./Home.css"
import { useContext } from 'react';
import {Button, Table} from 'react-bootstrap';
import { UserContext } from '../../UserContext/UserContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useContext(UserContext);
    
    return (
        <div>
          <Link to={"/create"}>
              <Button variant="primary">Create User</Button>
          </Link>
          <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Position</th>
                <th>salary</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>
                        <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.position}</td>
                        <td>{user.salary}</td>
                        <td>
                        <Link to={"/view/"+user.id}>
                        <Button className="action-btn" variant="success">View</Button>
                        </Link>
                        <Button className="action-btn" variant="primary">Edit</Button>
                        <Link to={"/delete/"+user.id}>
                        <Button className="action-btn" variant="danger">Delete</Button>
                        </Link>
                        </td>
                        </tr>    
                    )
                }
               
                
            </tbody>

</Table>
        </div>
    );
};

export default Home;