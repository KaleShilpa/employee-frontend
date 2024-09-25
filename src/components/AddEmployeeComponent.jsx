import { useState } from "react";
import { useNavigate} from "react-router-dom";

const AddEmployeeComponent = () => {
    const[firstName, setFirstName]=useState();
    const[lastName, setLastName]=useState();
    const[emailId, setEmailId]=useState();
    const navigate = useNavigate();
    
    const handleCancel = ()=>{
        navigate("/")
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const employee = {firstName,lastName,emailId};
        console.log(employee);
        fetch('/api/v1/employees',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(employee)
        }).then(()=>{
            console.log("new employee added");            
            navigate("/");
        })
    }
    return ( 
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input type="text" required value={firstName}
                                    onChange={e=>setFirstName(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input type="text" required value={lastName} 
                                    onChange={e=>setLastName(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <label>Email id: </label>
                                    <input type="text" required value={emailId}
                                    onChange={e=>setEmailId(e.target.value)}></input>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                                    <button className="btn btn-danger">Cancel</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>

        </div>
     );
}
 
export default AddEmployeeComponent;