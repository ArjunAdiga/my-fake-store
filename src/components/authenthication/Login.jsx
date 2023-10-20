import React, { useState } from 'react'
import { Link,  } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className=" flex  mx-[20%] bg-gradient-to-r from-teal-500 via-yellow-300 to-teal-500 justify-center items-center content-center">
    <div className="  min-w-[480px]   p-6 rounded-lg flex flex-col gap-8 ">
      <h1 className="text-4xl ">Login</h1>
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
      <div className="flex flex-col">
        <Button variant="contained" color="primary">
          Login
        </Button>
        <p className="p-2">
          Don't' have an account?{" "}
          <span>
            <Link to="/">register</Link>
          </span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Login