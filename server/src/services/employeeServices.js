const Employee = require('../models/Employee');


class EmployeeService{

    async CreateEmployee(name,email,position,department,dateHired){
        const newEmployee = new Employee({name,email,position,department,dateHired});
        return await newEmployee.save();

    }

    async getAllEmployees(){
        return await Employee.find();
    }
    async getEmployeeByID(employeeID){

        return await Employee.findById(employeeID);
    }
    async updateEmployee(employeeID, updatedData) {
       
        return await Employee.findByIdAndUpdate(employeeID, updatedData, {
                new: true, 
            }) 
    }

    async deleEmployee(employeeID){

        return await Employee.findByIdAndDelete(employeeID);
    }
}


module.exports = new EmployeeService();