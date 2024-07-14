const EmployeeService = require("../services/employeeServices");

class EmployeeController {
  async createEmployee(req, res) {
    try {
      const { name, email, position, department, dateHired } = req.body;
      const saveEmployee = await EmployeeService.CreateEmployee(
        name,
        email,
        position,
        department,
        dateHired
      );
      res.json(saveEmployee);
      console.log(name, email, position, department, dateHired);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllEmployees(req, res) {
    try {
      const employees = await EmployeeService.getAllEmployees();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getEmployeeByID(req, res) {
    const employeeID = req.params.id;
    try {
      const employee = await EmployeeService.getEmployeeByID(employeeID);

      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      } else {
        res.json(employee);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateEmployee(req, res) {
    const employeeID = req.params.id;
    const updatedData = req.body;
    try {
      const UpdatedEmployee = await EmployeeService.updateEmployee(employeeID,updatedData);

      if (!UpdatedEmployee) {
        return res.status(404).json({ error: "Employee not found" });
      } else {
        res.json(UpdatedEmployee);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  async deleteEmployee(req, res) {
    const employeeID = req.params.id;
    try {
      const deletedEmployee = await EmployeeService.deleEmployee(employeeID);

      if (!deletedEmployee) {
        return res.status(404).json({ error: "Employee not found" });
      } else {
        res.json({message : 'Employee deleted Successfully !', user : deletedEmployee});
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


}

module.exports = new EmployeeController();
