import React, { useEffect, useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");
  
  useEffect(() => {
    if(password !== confirmPassword)
      setPassError('password doesnt match')
    else 
       setPassError('')
  },[confirmPassword])
  return (
    <div className="h-full min-h-screen w-full bg-gradient-to-r from-purple-400 to-purple-300 flex justify-center items-center">
      <div className="min-w-[480px] h-auto w-auto p-8 rounded-lg flex flex-col gap-8">
        <h1 >Signup</h1>
        <div className="justify-center items-center flex flex-col">
          <input className="" type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="justify-center items-center flex flex-col">
          <input className="" type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="justify-center items-center flex flex-col">
          <input className="" type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div className="justify-center items-center flex flex-col">
          <input className="" type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}required/>
        </div>
        {passError && <div>{passError}</div>}
      </div>
    </div>
  );
};

export default Signup;
