import React, {useEffect, useState} from 'react';
import EmployeeService from "../services/employee.service";
import {Link} from "react-router-dom";

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        getAllEmployees()
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then(response => {
            setEmployees(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then(response => {
            console.log(response.data);
            getAllEmployees()
        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <div className="container">
            <h2 className="text-center mb-3">List Employees</h2>
            <Link to="/add-employee" className="btn btn-primary">Add Employee</Link>
            <table className="table table-bordered table-striped mt-3">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailId}</td>
                        <td>
                            <Link to={`/edit-employee/${employee.id}`} className="btn btn-primary">Edit</Link>
                            <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={()=>{deleteEmployee(employee.id)}}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;
