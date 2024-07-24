import { Link } from "react-router-dom";
import { useState,useEffect } from "react";



function LogIn(){
    
    const [email,setEmail] = useState('')
    const [password, setPassword]= useState('')
    const [users,setUsers] = useState([])
    const [isactive,setActive] = useState(false)
    const [errors,setErrors] = useState({email:email,password:password})
    const errorSpan = {
        borderColor: isactive?'red':''
    }
    // use effect
    useEffect(
        ()=>{
            setUsers(JSON.parse(localStorage.getItem('Users')))
        },[]
    )

    //get email
    function handleUserEmail(event){
        setEmail(event.target.value)
        
    }
    

    function handleUserPassword(event){
        setPassword(event.target.value)
    }

    function handleFormSubmit(e){

        e.preventDefault()
        if (!email.includes('@')){
            setErrors({...errors,email:'email must include @'})
            setActive(true)
        }
        else if(email!==users.email && password!==users.password){
            alert('failed')
        }
    }
    return(
        <div className="Main">
        <h1>Welcome to your task managing web application </h1>
        <div className="Mini-Main" >
            <h2>login to continue</h2>
            
                <form action="" onSubmit={handleFormSubmit}>
                    <br /><br />
                    <input type="email"  required placeholder="Enter Email" style={errorSpan} onChange={handleUserEmail} /><br /><br />

                    <br /><br />
                    <input type="text" placeholder="Enter Password" onChange={handleUserPassword} />

                    <Link to={'/Home'} className="login-link" onClick={handleFormSubmit}><button type="submit" className="login-btn" >login</button></Link>
                    <div className="signUp">
                        <p>no accout yet?</p>
                        <Link to={'/Register'}>Sign up</Link>
                    </div>
                </form>
        </div>
        
    </div>
    );

}

export default LogIn