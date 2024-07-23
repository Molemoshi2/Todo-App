import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Register(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [users,setUsers] = useState([])
    const [isactive,setActive] = useState(false)
    const [errors,setErrors] = useState({email:email,password:password})


    //span and div error style
    const errorSpan = {
        borderColor: isactive?'red':''
    }
    const errormsg = {
        diplay:isactive?'block':'none',
        color:isactive?'red':''
    }

    useEffect(
        ()=>{
            setUsers(JSON.parse(localStorage.getItem('Users')))
        },[]
    )

    // get email
    function handleChangeEmail(event){
        setEmail(event.target.value)
        console.log(email)
    }
    // get password
    function handleChangePassword(event){
        setPassword(event.target.value)
        console.log(password)
    }

    // confirm password
    function handleConfirmPassword(event){
        setNewPassword(event.target.value)
        console.log(newPassword)

    }
    // handle button click
    function handleButtonClick(event){
        event.preventDefault()
        //lets try form validation
        if (!email.includes('@') && email.trim()==''){
            setActive(true)
         }
        else{
            let newusers = [...users,{email:email,password:password}];
            localStorage.setItem('Users',JSON.stringify(newusers));
        }

    }

    return(
        <div className="Main">
        <h1>Welcome to your task managing web application </h1>
        <form action="" className="Mini-Main" onSubmit={handleButtonClick}>
            <h2>Sign Up</h2>
            
                <input type="email" placeholder="Enter Email" style={errorSpan}/>
                
                <br /><span style={errormsg}>Invalid Email</span><br />

                <br /><br />
                <input type="text" placeholder="Create new Password" onChange={handleChangePassword} />
                <br /><br />
                <br /><br />
                <input type="text" placeholder="Confirm password" onChange={handleConfirmPassword} />

                <Link className='login-link' to={'/Home'} onClick={handleButtonClick} ><button type="submit" className="login-btn">Sign Up</button></Link>
        </form >
        
    </div>
    );
}
export default Register