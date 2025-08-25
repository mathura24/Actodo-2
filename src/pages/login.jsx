import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ users }) {
  const [eusers, seteUsers] = useState("");
  const [epassword, setepassword] = useState("");
  const [rustr, setrustr] = useState(true);
  const navigate = useNavigate();

  function checkuser() {
    const found = users.some(
      (item) => item.username === eusers && item.password === epassword
    );

    if (found) {
      setrustr(true);
        navigate("/landing", { state: { user: eusers } });
    } else {
      setrustr(false);
    }
  }

  return (
    <div className="container">
      <div className="box">
        <h1 className="hey">Hey, Hii 👋</h1>
        {rustr ? (
          <p className="msg"> I help you manage your activities. You can login 🙂 </p>
        ) : (
          <p className="warning">Please sign up before you login ❌</p>
        )}

        <div >
          <input
            type="text"
           className="input"
            placeholder="Username"
            onChange={(e) => seteUsers(e.target.value)}
            value={eusers}
          /> <br />
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={(e) => setepassword(e.target.value)}
            value={epassword}
          />
          <br />
          <button
            className="bg-[#8272DA] w-24 p-1 rounded-md"
            onClick={checkuser}
          >
            Login
          </button>
          <p className="act">
            Don't have an account?{" "}
            <Link to="/signup" className="underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
