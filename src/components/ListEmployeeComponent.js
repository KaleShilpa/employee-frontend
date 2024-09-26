import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState("");
    const navigate = useNavigate();
    const addEmployee = ()=>{
        navigate("/add-employee");

    }

    function deleteEmployee(id){
        fetch('/api/v1/employees/'+id,{
            method:'DELETE'
        }).then(()=>{
            //to avoid refreshing the page again.
            getData();
        })
    }
    
    useEffect(
        ()=>{
            getData();
        },[]

    );
    
    function getData(){
        const fetchEmployees = async()=>{
            const response = await fetch("/api/v1/employees");
            const data = await response.json();
            setEmployees(data);
        };

        fetchEmployees();
    }
    if(!employees){
        return <h1>No employess found.</h1>
    } 
    return ( 
        <div>
            
            <h2 className="text-center">Employee List</h2>
            <div>
                <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
            </div>
            <div className="row">
                <table className="table table-stripped table-bordered">
                    <thead>
                        <tr>
                            <th> Id</th>
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee=>(
                            
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td><Link className="btn btn-info" to={`/update-employee/${employee.id}`}>Update</Link></td>
                                    <td><button onClick={()=>{deleteEmployee(employee.id)}} className="btn btn-danger">Delete</button></td>
                                </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
     );
}
 
export default ListEmployeeComponent;