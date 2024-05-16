import { useState } from "react";

const LoginForm = () => {

  const [token, setToken] = useState("");

  const handleLogin = async () => {
    // Make API call to your server to authenticate the user (after consulting backend team)
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        /* login credentials here */
      }),
      headers: {
        "Content-Type": "application/json",// (after consulting backend team)
      },
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
