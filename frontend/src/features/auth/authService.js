import api from "../../api/axios";

async function login() {
  const response = await api.post("auth/login", { email, password });
  return response.data;
}

export { login };
