import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup({ users, setUsers }) {
  const [eusers, seteUsers] = useState("");
  const [epassword, setepassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function Adduser() {
    if (!eusers || !epassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (epassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const userExists = users.some((user) => user.username === eusers);
    if (userExists) {
      setError("User already exists.");
      return;
    }

    setUsers([...users, { username: eusers, password: epassword }]);
    setError("");
    seteUsers("");
    setepassword("");
    setConfirmPassword("");
    navigate("/");
  }

  return (
    <div className="container">
      <div className="box">
        <h1 className="hey">Hey, Hii 👋</h1>
        <p>I help you manage your activities after you login 🙂</p>

        <div >
          <input
            type="text"
            
            placeholder="Username"
            onChange={(e) => seteUsers(e.target.value)}
            value={eusers}
          /> <br />
          <input
            type="password"
           
            placeholder="Password"
            onChange={(e) => setepassword(e.target.value)}
            value={epassword}
          /> <br />
          <input
            type="password"
            
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          /> <br />

          <button
            className="sign"
            onClick={Adduser}
          >
            Signup
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <p>
            Already have an account?{" "}
            <Link to="/" className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;