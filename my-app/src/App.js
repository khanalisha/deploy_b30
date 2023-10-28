import "./App.css";
import { Login } from "./component/Login";
import { SignUp } from "./component/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
