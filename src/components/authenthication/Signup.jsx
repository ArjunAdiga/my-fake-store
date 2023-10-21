import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {auth} from '../../firebase'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");
  const navigate=useNavigate()
  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setPassError("password doesnt match");
      return
    }
    setPassError("");
    createUserWithEmailAndPassword(auth, email,password).then(async(res) => {
      const user=res.user
      await updateProfile(user,{
        displayName:name
      })
      setName('')
      setEmail('')
      setPassword('')
      navigate('/login')
    }).catch((err) => console.log("Error",err))
  }
  return (
    <div className=" flex  bg-gradient-to-r from-teal-500 via-yellow-300 to-teal-500 justify-center items-center content-center">
      <div className="  min-w-[480px]   p-6 rounded-lg flex flex-col gap-8 ">
        <h1 className="text-4xl ">Signup</h1>
        <div className="justify-center items-center flex flex-col">
          <TextField
            className=""
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            variant="outlined"
            size="small"
            fullWidth
          />
        </div>
        <div className="justify-center items-center flex flex-col">
          <TextField
            className=""
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="justify-center items-center flex flex-col">
          <TextField
            className=""
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="justify-center items-center flex flex-col">
          <TextField
            className=""
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {passError && <div>{passError}</div>}
        <div className="flex flex-col">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Create Account
          </Button>
          <p className="p-2">
            Already have an account?{" "}
            <span>
              <Link to="/login">login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Signup;
