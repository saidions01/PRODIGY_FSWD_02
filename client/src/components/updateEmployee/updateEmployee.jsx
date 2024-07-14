import  { useState, useEffect } from "react";
import {  Form , Button} from 'react-bootstrap';
import {useNavigate, useParams} from 'react-router-dom';
import './updateEmployee.css';

const UpdateUser = () => {
    const navigate = useNavigate();

 

    const {id} = useParams();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        position: "",
        department: "",
        dateHired: "",
      });

    useEffect(() => {
        const fetchEmployee = async() => {

            try{
               const response = await fetch(`http://localhost:5000/api/employee/${id}`
              
               );
               
               const data = await response.json();
              if (response.ok) {
                setFormData(data);
              } else {
                console.error('Failed to fetch employee:', data.error);
              }


            }catch(error){
                console.log('error while fetching employees:', error.message);

            }

        }

        fetchEmployee();
    },[id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


      const handleUpdate = async (e) => {
        e.preventDefault();
        try{
            const response  = await fetch(`http://localhost:5000/api/employee/${id}`, {
                method : "PATCH",
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
 
    return(
        <>
        <div className="center-form">
          <h1>Update Employee</h1>
          <form onSubmit={handleUpdate}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your Name"
               
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
               
                onChange={handleInputChange}
              />
            </Form.Group>
  
            <Button variant="dark" type="submit" className="w-100" 
                >
              Update Employee
            </Button>
          </form>
        </div>
      </>
    );
}

export default UpdateUser;