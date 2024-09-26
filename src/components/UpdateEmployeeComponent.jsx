import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateEmployeeComponent = () => {
    const {id}=useParams();
    const[firstName, setFirstName]=useState();
    const[lastName, setLastName]=useState();
    const[emailId, setEmailId]=useState();
    const navigate = useNavigate();

    useEffect(()=>{
        
        const fetchEmployee = async()=>{
            const response = await fetch('/api/v1/employees/'+id);
            const data = await response.json();
            console.log("firstName="+data.firstName);
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setEmailId(data.emailId);
        };
        fetchEmployee();
    },[]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const employee = {firstName,lastName,emailId};
        console.log(employee);
        fetch('/api/v1/employees/'+id,{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(employee)
        }).then(()=>{
            console.log("new employee updated");            
            navigate("/");
        })
    }
    return ( 
         
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input type="text" value={firstName}
                                    onChange={e=>setFirstName(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input type="text" value={lastName}
                                    onChange={e=>setLastName(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label>Email id: </label>
                                    <input type="text" value={emailId}
                                    onChange={e=>setEmailId(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success" onClick={handleSubmit}>Update</button>
                                    
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>

        </div>
     );
}
 
export default UpdateEmployeeComponent;