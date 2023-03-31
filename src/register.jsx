import "./registerstyle.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Register=()=>{
    const sp1=()=>{
        var x=document.getElementById("password");
        if(x.type==="password"){
          x.type="text";
        }
        else{
          x.type="password";
        }
      }
      const sp2=()=>{
        var x=document.getElementById("password2");
        if(x.type==="password"){
          x.type="text";
        }
        else{
          x.type="password";
        }
      }
    return(
        <div id='register-page'>
            {/* onSubmit={onSubmit} */}
        <form  className='d-flex flex-column align-items-center justify-content-evenly'>
        <div class="form-group">
      <label for="exampleInputPassword1">User Name</label>
      <input type="text" class="form-control"   id='name'
                name='name'
                // value={name}
                placeholder='Enter your name'
                // onChange={onChange}
                required
                />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control"  aria-describedby="emailHelp"  id='email'
                name='email'
                // value={email}
                placeholder='Enter your email'
                // onChange={onChange}
                required
                />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control"    id='password'
                name='password'
                // value={password}
                placeholder='Enter password'
                // onChange={onChange}
                required
                />
      <div className='showpassword d-flex align-items-end justify-content-start'>
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={sp1}/>
    <label class="form-check-label" for="flexCheckDefault" >
      Show Password
    </label>
      </div>
      
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Confirm Password</label>
      <input type="password" class="form-control"  id='password2'
                name='password2'
                // value={password2}
                placeholder='Confirm password'
                // onChange={onChange}
                required
                />
      <div className='showpassword d-flex align-items-end justify-content-start'>
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={sp2}/>
    <label class="form-check-label" for="flexCheckDefault">
      Show Password
    </label>
      </div>
    </div>
   
    <button type="submit" class="btn btn-outline-warning">Sign Up</button>
  </form>
      </div>
    );
}
export default Register;