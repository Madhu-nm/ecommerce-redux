import React,{useState} from "react";
import validator from 'validator'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Signup(){
const[username,setUsername]=useState("")
const[password,setPassword]=useState("")
const[errors,setErrors]=useState({});

function handleSubmit(e){
    e.preventDefault();
    const errors= {};

    if (!username) {
        errors.username="Name is required"
    }
    if (!validator.isStrongPassword(password)) {
        errors.password="Enter strong password"
    }

    if (Object.keys(errors).length===0) {
        alert("success!")
    }
    else{setErrors(errors)}
}
return(
    <>
    <div className="d-flex align-items-center mt-5 flex-column" style={{height:"100vh"}}>
    <h1>Sign up</h1>
    <p className="card-text">Join in our Family!</p>
    
    <form onSubmit={handleSubmit}>
    <label className="form-label mt-2">UserName: </label>
    <input type="text" value={username} onChange= {(e)=>setUsername(e.target.value)} className="form-control mb-2"/>
    {errors.username && <span className="text-danger">{errors.username}</span>}
 <br/>
<label className="form-label mt-2">Password: </label>
    <input type="text" value={password} onChange= {(e)=>setPassword(e.target.value)} className="form-control mb-2"/>
    {errors.password && <span className="text-danger ">{errors.password}</span>}
<br/>
    <button type="submit" > Submit</button>
    
    </form>

</div>
    </>
)

}
