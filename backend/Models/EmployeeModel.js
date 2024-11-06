const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true },
    hireDate: { type: Date, default: Date.now }
});

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;