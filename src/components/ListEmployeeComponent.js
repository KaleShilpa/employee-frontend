import { useState } from "react";

const ListEmployeeComponent = () => {

    const[employees, setEmployees] = useState([
                                {firstName:"Shilpa", lastName: "Kale", emailId:"Shilpa.Kale@gmail.com"},
                                {firstName:"Akshay", lastName: "More", emailId:"Akshay.More@gmail.com"}]);
    return ( 
        <div>
            <h2 className="text-center">Employee List</h2>
            <div className="row">
                <table className="table table-stripped table-bordered">
                    <thead>
                        <tr>
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee=>(
                            
                                <tr>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td><a href="#">Delete</a></td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default ListEmployeeComponent;