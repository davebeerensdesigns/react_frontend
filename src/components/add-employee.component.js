import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import EmployeeService from "../services/employee.service";

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    let navigate = useNavigate();

    const handleSaveEmployee = (event) => {
        event.preventDefault();
        const employee = {firstName, lastName, emailId};
        EmployeeService.createEmployee(employee).then(response => {
            console.log(response.data);
            navigate("/employees");
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 offset-md-3">
                        <div className="card">
                            <h2 className="text-center">Add Employee</h2>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-2">
                                        <label className="form-label">First Name</label>
                                        <input type="text" placeholder="Enter first name" name="firstName"
                                               className="form-control" value={firstName}
                                               onChange={(e) => setFirstName(e.target.value)}/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" placeholder="Enter last name" name="lastName"
                                               className="form-control" value={lastName}
                                               onChange={(e) => setLastName(e.target.value)}/>
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className="form-label">Email Id</label>
                                        <input type="text" placeholder="Enter email" name="emailId"
                                               className="form-control" value={emailId}
                                               onChange={(e) => setEmailId(e.target.value)}/>
                                    </div>
                                    <div className="button-group d-flex justify-content-between mt-3">
                                        <button type="button" className="btn btn-secondary" onClick={() => {navigate("/employees")}}>Cancel</button>
                                        <button type="submit" className="btn btn-primary" onClick={handleSaveEmployee}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeComponent;
