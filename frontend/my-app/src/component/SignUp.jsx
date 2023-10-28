import React, { useState } from "react";
import axios from "axios";

export const SignUp = () => {
  const [username, setNmame] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    const newObj = {
      username,
      email,
      pass,
    };
    // console.log(newObj);
    axios
      .post("https://vast-gray-betta-sari.cyclic.app/users/register", newObj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      })

      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>SignUp</div>

      <input
        type="text"
        placeholder="username"
        onChange={(e) => setNmame(e.target.value)}
      />
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
      <button type="Submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};
