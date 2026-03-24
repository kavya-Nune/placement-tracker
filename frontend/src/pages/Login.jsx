/*import { useState } from "react";
import { FaUserGraduate, FaBuilding, FaEye } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      alert(`Login successful as ${res.data.user?.userType || role}`);

      // Redirect based on selected role
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
            </svg>
          </div>
        </div>

        
        <h2 className="text-2xl font-bold text-center text-gray-800">Placement Tracker</h2>
        <p className="text-center text-sm text-gray-500 mb-6">Sign in to manage placement opportunities</p>

       
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setRole("student")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-l-full ${
              role === "student" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaUserGraduate /> Student
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-r-full ${
              role === "admin" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaBuilding /> Admin
          </button>
        </div>

        
        <form onSubmit={handleLogin}>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <FaEye
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 text-gray-500 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center">
          New user? <a href="/register" className="text-blue-600 underline">Register here</a>
        </p>

       
        <div className="mt-6 text-sm text-gray-500 text-center">
          <p className="font-medium">Demo Credentials:</p>
          <p>Student: student@example.com / 123456</p>
          <p>Admin: admin@example.com / 123456</p>
        </div>
      </div>
    </div>
  );
};

export default Login;*/


/*import { useState } from "react"; 
import { FaUserGraduate, FaBuilding, FaEye } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 👈 inline error message

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save token & role
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", role);

      // ✅ Direct navigation without popup
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800">Placement Tracker</h2>
        <p className="text-center text-sm text-gray-500 mb-6">Sign in to manage placement opportunities</p>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setRole("student")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-l-full ${
              role === "student" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaUserGraduate /> Student
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-r-full ${
              role === "admin" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaBuilding /> Admin
          </button>
        </div>

 
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <FaEye
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 text-gray-500 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center">
          New user? <a href="/register" className="text-blue-600 underline">Register here</a>
        </p>

        
      </div>
    </div>
  );
};

export default Login;*/


/*import { useState } from "react"; 
import { FaUserGraduate, FaBuilding, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save token & role
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", role);

      // ✅ Direct navigation without popup
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800">Placement Tracker</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign in to manage placement opportunities
        </p>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setRole("student")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-l-full ${
              role === "student" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaUserGraduate /> Student
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-r-full ${
              role === "admin" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaBuilding /> Admin
          </button>
        </div>

        
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

  
          <p className="mt-4 text-center">
            New user? <a href="/register" className="text-blue-600 underline">Register here</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;*/

/*import { useState } from "react"; 
import { FaUserGraduate, FaBuilding, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ Admin login: hardcoded credentials check
    if (role === "admin") {
      if (email === "tpo@mvsrec.edu.in" && password === "TPO-MVSR-2026") {
        localStorage.setItem("token", "admin-static-token"); // dummy token
        localStorage.setItem("role", "admin");
        navigate("/admin-dashboard");
        return;
      } else {
        setError("Invalid admin credentials. Only TPO can log in.");
        return;
      }
    }

    // ✅ Student login (backend validation)
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "student");

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        
        <h2 className="text-2xl font-bold text-center text-gray-800">Placement Tracker</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign in to manage placement opportunities
        </p>

        
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setRole("student")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-l-full ${
              role === "student" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaUserGraduate /> Student
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-r-full ${
              role === "admin" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaBuilding /> Admin
          </button>
        </div>

       
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        
        <form onSubmit={handleLogin}>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        
        {role === "student" && (
          <p className="mt-4 text-center">
            New user? <a href="/register" className="text-blue-600 underline">Register here</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;*/

/*import { useState } from "react";
import { FaUserGraduate, FaBuilding, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save token & role
      localStorage.setItem("token", res.data.token);

      // ✅ Check if admin
      if (role === "admin") {
        if (res.data.user.isAdmin) {
          localStorage.setItem("role", "admin");
          navigate("/admin-dashboard");
        } else {
          setError("Only TPO can log in as Admin!");
        }
      } else {
        // ✅ Student login
        localStorage.setItem("role", "student");
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800">Placement Tracker</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign in to manage placement opportunities
        </p>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setRole("student")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-l-full ${
              role === "student" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaUserGraduate /> Student
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-r-full ${
              role === "admin" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaBuilding /> Admin
          </button>
        </div>

        
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        
        {role === "student" && (
          <p className="mt-4 text-center">
            New user?{" "}
            <a href="/register" className="text-blue-600 underline">
              Register here
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;*/
import { useState } from "react"; 
import { FaUserGraduate, FaBuilding, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ Admin login: hardcoded credentials check
    if (role === "admin") {
      if (email === "tpo@mvsrec.edu.in" && password === "TPO-MVSR-2026") {
        localStorage.setItem("token", "admin-static-token"); // dummy token
        localStorage.setItem("role", "admin");
        navigate("/admin-dashboard");
        return;
      } else {
        setError("Invalid admin credentials. Only TPO can log in.");
        return;
      }
    }

    // ✅ Student login (backend validation)
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", "student");

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        
        <h2 className="text-2xl font-bold text-center text-gray-800">Placement Tracker</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign in to manage placement opportunities
        </p>

        {/* Role switcher */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setRole("student")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-l-full ${
              role === "student" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaUserGraduate /> Student
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`flex items-center gap-2 px-5 py-2 border rounded-r-full ${
              role === "admin" ? "bg-blue-100 text-blue-600" : "bg-white text-gray-600"
            }`}
          >
            <FaBuilding /> Admin
          </button>
        </div>

        {/* Inline error */}
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {/* Login form */}
        <form onSubmit={handleLogin}>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-3 right-3 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Register link only for students */}
        {role === "student" && (
          <p className="mt-4 text-center">
            New user? <a href="/register" className="text-blue-600 underline">Register here</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;










