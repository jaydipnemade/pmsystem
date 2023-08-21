import { useState } from "react";
import "./Userlogin.css";

const Userlogin = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [allEntry,setAllEntry] = useState([]);
  
  const submitForm = (e)=>{
  e.preventDefault();
  const newEntry = {email:email,password:password};
  setAllEntry([...allEntry,newEntry]);
  alert("login successful");
  }

  return (
    <>
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-4  m-5  py-5 rounded shadow-lg  p-3 mb-5 rounded">
                <div className="text mb-3 text-center">Login</div>
                <form className="form" action="" onSubmit={submitForm}>

                    {/* Email Input */}
                    <div className="Email">
                        <div className="mb-2">Email ID</div>
                        <input  
                            className="email-input form-control form-control-lg mb-2" 
                            type="email"  
                            placeholder="Enter Email ID"
                            value={email}
                            onChange={(e)=>setEmail(e.target.email)}
                            required
                        />

                    </div>

                    {/* Password Input */}
                    <div className="Password">
                            <div className="mb-2">Password</div>
                            <input 
                                className="password-input form-control form-control-lg mb-2"
                                type="password" 
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.password)}
                                required
                            />
                    </div>
                    
                    {/* Login Button */}
                    <div className="Button mt-4">
                            <button 
                                type="submit"
                                className=" Button w-100 btn btn-primary btn-lg mb-5">
                                Login
                            </button>
                    </div>
                        

                    <div className="mb-2 text-center">
                        Don't have an Account?
                    </div>

                </form>
            </div>
        </div>  
    </>
  );
}

export default Userlogin;
