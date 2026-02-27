import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("Email:", email);
  console.log("Password:", password);
  return (
    <>
      <form>
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
