import { Link } from "react-router-dom";

function Register(){
    return(
        <div className="Main">
        <h1>Welcome to your task managing web application </h1>
        <div className="Mini-Main" >
            <h2>Sign Up</h2>
            
                <input type="email" placeholder="Enter Email" /><br /><br />

                <br /><br />
                <input type="text" placeholder="Create new Password" />
                <br /><br />
                <br /><br />
                <input type="text" placeholder="Confirm password" />

                <button className="login-btn"><Link className='login-link' to={'/Home'}>Sign Up</Link></button>
        </div>
        
    </div>
    );
}
export default Register