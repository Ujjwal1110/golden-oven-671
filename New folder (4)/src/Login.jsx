const Login =  () => {
    return (
        <div>
        <form id="form">
        <h1>Log In</h1>
        <input placeholder="Enter 10-Digit Mobile Number" id="mobile" type="Number"/>
        {/* <hr style="width:85%"/> */}
        <input placeholder="Enter your password" id="password" type="password" />
        {/* <hr style="width:85%"/> */}
        <input type="email" id="email" placeholder="Enter your Email" />
        {/* <hr style="width:85%"/> */}
       <input type="submit" id="Cont" value="LogIn" />
       <div><p>New User? <a id="anchor"href="signup.html"><span>Sign Up</span></a> </p></div>
       </form>
        </div>
        
    )
    }
    
    export default Login