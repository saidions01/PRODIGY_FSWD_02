import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./postEmployee.css";
import {useNavigate} from 'react-router-dom';
const PostUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    dateHired: "",
  });


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response  = await fetch("http://localhost:5000/api/employee", {
            method : "POST",
     
            headers: {
                "Content-Type" : "application/json" ,
            },
                body : JSON.stringify(formData)
           })
          const data =  await response.json(response);
           console.log(data);
           navigate('/')

    }catch(error){
        console.log(error.message)
    }

  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="center-form">
        <h1>Post a new Employee</h1>
        <form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your Name"
              autoComplete="false"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              autoComplete="false"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              name="position"
              placeholder="Enter your Position"
              value={formData.position}
              autoComplete="false"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDepartment">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              name="department"
              placeholder="Enter your department"
              value={formData.department}
              autoComplete="false"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDateHired">
            <Form.Label>Date Hired</Form.Label>
            <Form.Control
              type="text"
              name="dateHired"
              placeholder="Enter when you got hired"
              value={formData.dateHired}
              autoComplete="false"
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Post Employee
          </Button>
        </form>
      </div>
    </>
  );
};

export default PostUser;
