import { Link } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./loginstyle.scss";


const Login=()=>{
    return(
        <div id='login-page'>
            {/* onSubmit={onSubmit} */}
<form  className='d-flex flex-column align-items-center justify-content-evenly'>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email" id='email'
              name='email'
            //   value={email}
            //   onChange={onChange}
            required
            />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control"  placeholder="Password" id='password'
              name='password'
            //   value={password}
             
            //   onChange={onChange}
            required
              />
              
  </div>
  
  <button type="submit" class="btn btn-outline-warning">Login</button>
  <p>Dont have an account? <Link to={'/register'} className='links'>Signup Now</Link></p>
</form>
    </div>
    );
}
export default Login;