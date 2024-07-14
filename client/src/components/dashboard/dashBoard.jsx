
import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/employee');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.log('error while fetching employees:', error.message);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleUpdate = (employeeId) => {
    navigate(`/employee/${employeeId}`);
  };

  const handleDelete = async (employeeId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/employee/${employeeId}`, {
        method: 'DELETE',
      });
      console.log(response);
      if (response.ok) {
        fetchEmployees();
      }
    } catch (error) {
      console.log('error while deleting employee:', error.message);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <h2 className="text-center mb-4">Dashboard Component</h2>
          <Table striped bordered hover responsive className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Department</th>
                <th>Date Hired</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.position}</td>
                  <td>{employee.department}</td>
                  <td>{new Date(employee.dateHired).toLocaleDateString()}</td>
                  <td className="actionButtons">
                    <Button variant="dark" onClick={() => handleUpdate(employee._id)}>
                      Update
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(employee._id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
