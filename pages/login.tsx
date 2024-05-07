// pages/index.tsx

import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const formData = `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

      const response = await axios.post("https://beta.optimeleon.com/auth/jwt/login", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          accept: "application/json"
        }
      });

      if (response.status === 200) {
        // Redirect to dashboard or any other authenticated route
        router.push("/dashboard");
      } else {
        // Handle authentication error
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred, please try again later");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
