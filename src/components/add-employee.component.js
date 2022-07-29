import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import EmployeeService from "../services/employee.service";

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    let navigate = useNavigate();
    const {id} = useParams();

    const handleSaveOrUpdateEmployee = (event) => {
        event.preventDefault();
        const employee = {firstName, lastName, emailId};

        if(id){
            EmployeeService.updateEmployee(id, employee).then(response => {
                navigate('/employees');
            }).catch(error => {
                console.log(error);
            })
        } else {
            EmployeeService.createEmployee(employee).then(response => {
                console.log(response.data);
                navigate("/employees");
            }).catch(error => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then(response => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmailId(response.data.emailId);
        }).catch(error => {
            console.log(error);
        })
    },[])

    const title = () => {
        if(id) {
            return "Edit Employee";
        } else {
            return "Add Employee";
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 offset-md-3">
                        <div className="card">
                            <h2 className="text-center mt-3">{title()}</h2>
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
                                        <button type="submit" className="btn btn-primary" onClick={handleSaveOrUpdateEmployee}>Submit</button>
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
