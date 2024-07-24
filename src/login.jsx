import { Link } from "react-router-dom";
import { useState,useEffect } from "react";



function LogIn(){
    
    const [email,setEmail] = useState('')
    const [password, setPassword]= useState('')
    const [users,setUsers] = useState(()=>
        {
        const Myusers = localStorage.getItem('User')
        if (Myusers){
            console.log('here')
            return JSON.parse(Myusers)
        }
        else return []
    })
    const [isactive,setActive] = useState(false)
    const [errors,setErrors] = useState({email:email,password:password})
    const errorSpan = {
        borderColor: isactive?'red':''
    }
    const errormsg = {
        diplay:isactive?'block':'none',
        color:isactive?'red':'white'
    }

    //get email
    function handleUserEmail(event){
        setEmail(event.target.value)
        
    }
    

    function handleUserPassword(event){
        setPassword(event.target.value)
    }

    function handleFormSubmit(e){
        let index = 0;
        if (!email.includes('@')){
            e.preventDefault()
            setErrors({...errors,email:'email must include @'})
            setActive(true)
        }
        else if(email!==users[index].email && password!==users[index].password){
            e.preventDefault()
            console.log(email)
            alert('failed')
        }
        else{
            alert('success')
        }
    }
    return(
        <div className="Main">
        <h1>Welcome to your task managing web application </h1>
        <div className="Mini-Main" >
            <h2>login to continue</h2>
            
                <form action="" >
                    <br /><br />
                    <input type="email"  required placeholder="Enter Email" style={errorSpan} onChange={handleUserEmail} /><br /><br />

                    <br /><span style={errormsg}>invalid email</span><br />
                    <input type="password" placeholder="Enter Password" onChange={handleUserPassword} />

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