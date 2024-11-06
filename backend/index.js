const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const EmployeeRoutes = require('./Routes/EmployeeRoutes'); // Ensure this is correct
const PORT = process.env.PORT || 8080;

require('./Models/db');
app.use(cors());
app.use(bodyParser.json());

app.use('/api/employees', EmployeeRoutes); // Ensure routes are used properly

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
