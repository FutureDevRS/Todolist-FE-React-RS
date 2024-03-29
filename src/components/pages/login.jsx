import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn, setUserId }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setError(true);
      setErrorMessage("Error: All fields must be completed");
    } else {
      fetch("https://todolistbers.herokuapp.com/user/verify", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res === "User NOT verified") {
            setError(true);
            setErrorMessage("Error: Account could not be verified");
          } else {
            console.log("login response", res.id);
            setUserId(res.id);
            setError(false);
            setErrorMessage("");
            setLoggedIn(true);
            navigate("/");
          }
        })
        .catch((error) => {
          console.log("Error with logging in, please try again.", error);
          setError(true);
          setErrorMessage("Error with logging in, please try again.");
        });
    }
  };

  useEffect(() => {
    setError(false);
    setErrorMessage("");
  }, [username, password]);

  return (
    <div className="stars">
      <div className="twinkling">
        <div className="login">
          <div className="loginWrapper">
            <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
              <div className="input-submit-container">
                <input
                  type="text"
                  placeholder="Username"
                  className="loginInput"
                  value={username}
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="loginInputPassword"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="loginButton">
                  Log In
                </button>
              </div>

              <Link className="loginLink" to="/signup">
                Sign Up Here.
              </Link>
            </form>

            <h3
              className="errorMessage"
              style={{ visibility: error ? "visible" : "hidden" }}
            >
              {errorMessage}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
