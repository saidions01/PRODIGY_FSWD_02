const express = require('express');
const EmployeeController = require('../controllers/EmployeeController');

const router = express.Router();

router.post('/', EmployeeController.createEmployee);
router.get('/',EmployeeController.getAllEmployees);
router.get('/:id',EmployeeController.getEmployeeByID);
router.patch('/:id',EmployeeController.updateEmployee);
router.delete('/:id',EmployeeController.deleteEmployee);









module.exports = router;