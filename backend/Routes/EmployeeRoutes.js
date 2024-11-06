 

// Routes/EmployeeRoutes.js

const express = require('express');
const router = express.Router();
const {
    getAllEmployees,
    getEmployeeDetailsById,
    createEmployee,
    updateEmployeeById,
    deleteEmployeeById
} = require('../Controllers/EmployeeController');  // Correctly import the controller methods

// Define routes and attach the controller methods as handlers
router.get('/', getAllEmployees);  // Correctly attached route handler
router.get('/:id', getEmployeeDetailsById);
router.post('/', createEmployee);
router.put('/:id', updateEmployeeById);
router.delete('/:id', deleteEmployeeById);

module.exports = router;
