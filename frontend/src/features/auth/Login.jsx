import { useState } from "react";
import { login } from "./authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Email:", email);
  console.log("Password:", password);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await login(email, password);
    console.log(data);

    const { token } = data;
    localStorage.setItem("token", token);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Email:</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h1>password</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
