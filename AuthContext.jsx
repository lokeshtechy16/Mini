import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(()=>{
    // below useEffect used to stay login use as loged in while refresh by storing
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  });

  // keep users in localStorage

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // below useEffect used to stay login use as loged in while refresh // keep logged-in user in localStorage

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const signup = (email, password) => {
    const exists = users.find((u) => u.email === email);
    if (exists) return { success: false, message: "User already exists" };

    const newUser = { email, password };
    setUsers([...users, newUser]);
    setUser({ email });
    return { success: true };
  };

  const login = (email, password) => {
    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (validUser) {
      setUser({ email });
      return { success: true };
    }
    return { success: false, message: "Invalid email or password" };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
