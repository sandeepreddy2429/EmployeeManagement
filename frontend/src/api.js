const BASE_URL = 'http://localhost:8080';

export const GetAllEmployees = async (search = '', page = 1, limit = 5) => {
    const url = `${BASE_URL}/api/employees?search=${search}&page=${page}&limit=${limit}`;
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    try {
        const result = await fetch(url, options);
        if (!result.ok) throw new Error(`Error: ${result.status}`);
        const { data } = await result.json();
        return { data };
    } catch (err) {
        console.error('Failed to fetch employees:', err);
        return { error: 'Failed to fetch employees', details: err.message };
    }
};

export const GetEmployeeDetailsById = async (id) => {
    const url = `${BASE_URL}/api/employees/${id}`;
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    try {
        const result = await fetch(url, options);
        if (!result.ok) throw new Error(`Error: ${result.status}`);
        const { data } = await result.json();
        return { data };
    } catch (err) {
        console.error(`Failed to fetch employee details for ID ${id}:`, err);
        return { error: 'Failed to fetch employee details', details: err.message };
    }
};

export const DeleteEmployeeById = async (id) => {
    const url = `${BASE_URL}/api/employees/${id}`;
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    try {
        const result = await fetch(url, options);
        if (!result.ok) throw new Error(`Error: ${result.status}`);
        const data = await result.json();
        return { data };
    } catch (err) {
        console.error(`Failed to delete employee with ID ${id}:`, err);
        return { error: 'Failed to delete employee', details: err.message };
    }
};

export const CreateEmployee = async (empObj) => {
    const url = `${BASE_URL}/api/employees`;
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(empObj)
    };
    try {
        const result = await fetch(url, options);
        if (!result.ok) throw new Error(`Error: ${result.status}`);
        const data = await result.json();
        return { data };
    } catch (err) {
        console.error('Failed to create employee:', err);
        return { error: 'Failed to create employee', details: err.message };
    }
};

export const UpdateEmployeeById = async (empObj, id) => {
    const url = `${BASE_URL}/api/employees/${id}`;
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(empObj)
    };
    try {
        const result = await fetch(url, options);
        if (!result.ok) throw new Error(`Error: ${result.status}`);
        const data = await result.json();
        return { data };
    } catch (err) {
        console.error(`Failed to update employee with ID ${id}:`, err);
        return { error: 'Failed to update employee', details: err.message };
    }
};
