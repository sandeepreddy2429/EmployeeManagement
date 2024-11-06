// Controllers/EmployeeController.js

const Employee = require('../Models/EmployeeModel');

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json({ data: employees });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching employees' });
    }
};

// Get employee by ID
const getEmployeeDetailsById = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json({ data: employee });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching employee details' });
    }
};

// Create a new employee
const createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);
    try {
        const employee = await newEmployee.save();
        res.status(201).json({ data: employee });
    } catch (err) {
        res.status(500).json({ error: 'Error creating employee' });
    }
};

// Update employee by ID
const updateEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json({ data: employee });
    } catch (err) {
        res.status(500).json({ error: 'Error updating employee' });
    }
};

// Delete employee by ID
const deleteEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting employee' });
    }
};

module.exports = {
    getAllEmployees,
    getEmployeeDetailsById,
    createEmployee,
    updateEmployeeById,
    deleteEmployeeById
};
