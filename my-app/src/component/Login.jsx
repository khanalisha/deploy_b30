import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [username,setusername] = useState("");
  const [pass, setPass] = useState("");

  const handleAuth = () => {
  
    const newObj = {
      email,
      pass,
    };
 
    // console.log(newObj);
    axios
      .post("https://vast-gray-betta-sari.cyclic.app/users/login", newObj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("token", res.data.token);
      })

      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>Login</div>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="pass"
        onChange={(e) => setPass(e.target.value)}
      />
      <button type="Submit" onClick={handleAuth}>
        Submit
      </button>
    </>
  );
};
