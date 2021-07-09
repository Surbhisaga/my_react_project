import React, { useState } from 'react';

const MultipleInputs = () => {

    const [userRegistration , setUserRegistration] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });

    const [records , setRecords] =useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);

        setUserRegistration({ ... userRegistration , [name]:value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ... userRegistration, id:new Date().getTime().toString() }
        console.log(records);
        setRecords([ ... records , newRecord]);
        console.log(records);

        setUserRegistration({ username: "", email: "", phone:"",password:""}); 
    }

    return(
       <>
    <div class="form"> 
     <form action="" onSubmit={handleSubmit} className="dataTable">
    
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
      <div class="input-container ic1">
      <input type="text" class="input" autoComplete="off" value={userRegistration.username} onChange={handleInput} name="username" id="username"/>
        <div class="cut"></div>
        <label htmlFor="username" class="placeholder">Full Name</label>
      </div>
      <div class="input-container ic2">
        <input type="text" class="input" autoComplete="off" value={userRegistration.email} onChange={handleInput} name="email" id="email"/>
        <div class="cut"></div>
        <label htmlFor="email" class="placeholder">Email</label>
      </div>
      <div class="input-container ic2">
        <input type="text"class="input"  autoComplete="off" value={userRegistration.phone} onChange={handleInput} name="phone" id="phone"/>
        <div class="cut cut-short"></div>
        <label htmlFor="phone" class="placeholder">Phone</label>
      </div>
      <div class="input-container ic2">
      <input type="password"class="input"  autoComplete="off" value={userRegistration.password} onChange={handleInput} name="password" id="password"/>
        <div class="cut cut-short"></div>
        <label htmlFor="password" class="placeholder">Password</label>
      </div>
      <button type="submit" class="submit">Register</button>
    
    <br/><br/>
    </form>

       <div class="dataHead">
           {
               records.map((curElem) => {
                   const { id,username,email,phone,password } = curElem;
                   return( 
                       <div className="showDataStyle" key={id}>
                            <p>{username}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{password}</p>
                       </div>
                   )
                })
            }
       </div>
       </div>
       </>
    )
};

export default MultipleInputs;