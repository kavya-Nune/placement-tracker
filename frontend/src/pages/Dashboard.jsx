// src/pages/Dashboard.jsx
/*import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await axios.get('/api/opportunities');
        setOpportunities(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOpportunities();
  }, []);

  const filtered = opportunities.filter((op) =>
    op.company.toLowerCase().includes(search.toLowerCase()) ||
    op.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Placement Opportunities</h1>
        <div className="flex gap-4 items-center">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">CS21B1001</span>
          <button onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/login';
          }} className="text-red-500">Logout</button>
        </div>
      </div>

      <p className="text-gray-600 mt-1">Welcome, Alex Chen</p>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Search by company or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <StatCard label="Available Opportunities" count={filtered.length} icon="🏢" />
        <StatCard label="Ending Soon" count={filtered.filter(op => new Date(op.deadline) - new Date() < 5 * 86400000).length} icon="⏰" />
        <StatCard label="Companies" count={[...new Set(filtered.map(op => op.company))].length} icon="👥" />
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500">
            <p className="text-2xl">📄</p>
            <p className="font-semibold">No opportunities found</p>
            <p>Check back later for new placement opportunities.</p>
          </div>
        ) : (
          <ul className="mt-4 space-y-4">
            {filtered.map((op) => (
              <li key={op._id} className="p-4 border rounded shadow-sm">
                <h2 className="text-lg font-semibold">{op.role} at {op.company}</h2>
                <p className="text-sm text-gray-600">Type: {op.type} | Dept: {op.department}</p>
                <p className="text-sm text-gray-500">Deadline: {new Date(op.deadline).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, count, icon }) => (
  <div className="bg-gray-100 p-4 rounded shadow">
    <p className="text-sm text-gray-600 flex items-center gap-2">{icon} {label}</p>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

export default Dashboard;*/

/*import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [search, setSearch] = useState('');
  const [user, setUser] = useState({ name: '', roll: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Optional: If you store user details in localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser({ name: storedUser.name || 'User', roll: storedUser.roll || 'Unknown' });
    } else {
      setUser({ name: 'User', roll: 'Unknown' });
    }

    // Fetch opportunities
    const fetchOpportunities = async () => {
      try {
        const res = await axios.get('/api/opportunities');
        setOpportunities(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOpportunities();
  }, [navigate]);

  const filtered = opportunities.filter((op) =>
    op.company.toLowerCase().includes(search.toLowerCase()) ||
    op.role.toLowerCase().includes(search.toLowerCase())
  );

  const endingSoonCount = filtered.filter(op => {
    if (!op.deadline) return false;
    const deadline = new Date(op.deadline);
    const now = new Date();
    const diffDays = (deadline - now) / (1000 * 60 * 60 * 24);
    return diffDays < 5 && diffDays >= 0;
  }).length;

  const uniqueCompanies = [...new Set(filtered.map(op => op.company))].length;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Placement Opportunities</h1>
        <div className="flex gap-4 items-center">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">{user.roll}</span>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              navigate('/login');
            }}
            className="text-red-500"
          >
            Logout
          </button>
        </div>
      </div>

      <p className="text-gray-600 mt-1">Welcome, {user.name}</p>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Search by company or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <StatCard label="Available Opportunities" count={filtered.length} icon="🏢" />
        <StatCard label="Ending Soon" count={endingSoonCount} icon="⏰" />
        <StatCard label="Companies" count={uniqueCompanies} icon="👥" />
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500">
            <p className="text-2xl">📄</p>
            <p className="font-semibold">No opportunities found</p>
            <p>Check back later for new placement opportunities.</p>
          </div>
        ) : (
          <ul className="mt-4 space-y-4">
            {filtered.map((op) => (
              <li key={op._id} className="p-4 border rounded shadow-sm">
                <h2 className="text-lg font-semibold">{op.role} at {op.company}</h2>
                <p className="text-sm text-gray-600">Type: {op.type} | Dept: {op.department}</p>
                <p className="text-sm text-gray-500">
                  Deadline: {op.deadline ? new Date(op.deadline).toLocaleDateString() : 'N/A'}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, count, icon }) => (
  <div className="bg-gray-100 p-4 rounded shadow">
    <p className="text-sm text-gray-600 flex items-center gap-2">{icon} {label}</p>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

export default Dashboard;*/

/*import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Redirect to login if token is not found
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  // Fetch placement opportunities
  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await axios.get('/api/opportunities');
        setOpportunities(res.data);
      } catch (err) {
        console.error('Error fetching opportunities:', err);
      }
    };
    fetchOpportunities();
  }, []);

  const filtered = opportunities.filter((op) =>
    op.company?.toLowerCase().includes(search.toLowerCase()) ||
    op.role?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Placement Opportunities</h1>
        <div className="flex gap-4 items-center">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">CS21B1001</span>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/login');
            }}
            className="text-red-500"
          >
            Logout
          </button>
        </div>
      </div>

      <p className="text-gray-600 mt-1">Welcome, Student</p>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Search by company or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <StatCard label="Available Opportunities" count={filtered.length} icon="🏢" />
        <StatCard
          label="Ending Soon"
          count={filtered.filter(
            (op) => new Date(op.deadline) - new Date() < 5 * 86400000
          ).length}
          icon="⏰"
        />
        <StatCard
          label="Companies"
          count={[...new Set(filtered.map((op) => op.company))].length}
          icon="👥"
        />
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500">
            <p className="text-2xl">📄</p>
            <p className="font-semibold">No opportunities found</p>
            <p>Check back later for new placement opportunities.</p>
          </div>
        ) : (
          <ul className="mt-4 space-y-4">
            {filtered.map((op) => (
              <li key={op._id} className="p-4 border rounded shadow-sm bg-white">
                <h2 className="text-lg font-semibold">{op.role} at {op.company}</h2>
                <p className="text-sm text-gray-600">Type: {op.type} | Dept: {op.department}</p>
                <p className="text-sm text-gray-500">Deadline: {new Date(op.deadline).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, count, icon }) => (
  <div className="bg-gray-100 p-4 rounded shadow text-center">
    <p className="text-sm text-gray-600 flex items-center justify-center gap-2">{icon} {label}</p>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

export default Dashboard;*/


/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userDept, setUserDept] = useState('CSE'); // You can set this dynamically based on logged-in user

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await axios.get('/api/opportunities');

        // Ensure response is an array
        if (Array.isArray(res.data)) {
          setOpportunities(res.data);
        } else {
          console.error('Expected array but got:', res.data);
          setOpportunities([]);
        }
      } catch (err) {
        console.error('Error fetching opportunities:', err);
        setError('Failed to load opportunities');
        setOpportunities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Placement Opportunities</h2>

      {Array.isArray(opportunities) && opportunities.length === 0 ? (
        <div>No opportunities available</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {opportunities
            .filter((opp) => opp.department === userDept || opp.department === 'All')
            .map((opp) => (
              <div
                key={opp._id}
                className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-blue-700">{opp.company}</h3>
                <p><strong>Role:</strong> {opp.role}</p>
                <p><strong>Eligibility:</strong> {opp.eligibility}</p>
                <p><strong>Deadline:</strong> {opp.deadline}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;*/

/*import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [deptFilter, setDeptFilter] = useState('All Departments');

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await axios.get('/api/opportunities');
        setOpportunities(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error('Error fetching opportunities:', err);
        setOpportunities([]);
      }
    };
    fetchOpportunities();
  }, []);

  const filtered = opportunities.filter((op) => {
    const matchesSearch =
      op.company?.toLowerCase().includes(search.toLowerCase()) ||
      op.role?.toLowerCase().includes(search.toLowerCase());

    const matchesType = typeFilter === 'All Types' || op.type === typeFilter;
    const matchesDept = deptFilter === 'All Departments' || op.department === deptFilter;

    return matchesSearch && matchesType && matchesDept;
  });

  const endingSoonCount = filtered.filter(
    (op) => new Date(op.deadline) - new Date() < 5 * 86400000
  ).length;

  const uniqueCompanies = [...new Set(filtered.map((op) => op.company))];

  return (
    <div className="p-6 bg-[#f9fafb] min-h-screen font-sans">
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2 text-[#0f172a]">
            🏢 Placement Opportunities
          </h1>
          <p className="text-sm text-gray-500">Welcome, MVSRins</p>
        </div>
        <div className="flex gap-4 items-center">
          <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-medium">
            CS21B1001
          </span>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }}
            className="text-gray-500 hover:text-red-600 text-sm"
          >
            🔓 Logout
          </button>
        </div>
      </div>

     
      <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4 items-center mb-6">
        <input
          type="text"
          placeholder="🔍 Search by company or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/4"
        >
          <option>All Types</option>
          <option>Internship</option>
          <option>Full-time</option>
        </select>
        <select
          value={deptFilter}
          onChange={(e) => setDeptFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/4"
        >
          <option>All Departments</option>
          <option>CSE</option>
          <option>ECE</option>
          <option>MECH</option>
          <option>EEE</option>
          <option>IT</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard label="Available Opportunities" count={filtered.length} icon="📄" color="blue" />
        <StatCard label="Ending Soon" count={endingSoonCount} icon="⏰" color="green" />
        <StatCard label="Companies" count={uniqueCompanies.length} icon="👥" color="purple" />
      </div>

     
      <div>
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-4xl">📄</p>
            <p className="text-lg font-semibold mt-2">No opportunities found</p>
            <p className="text-sm">Check back later for new placement opportunities.</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {filtered.map((op) => (
              <li
                key={op._id}
                className="p-4 bg-white rounded shadow border border-gray-200"
              >
                <h2 className="text-lg font-semibold text-blue-700">
                  {op.role} at {op.company}
                </h2>
                <p className="text-sm text-gray-600">
                  <strong>Type:</strong> {op.type} | <strong>Dept:</strong> {op.department}
                </p>
                <p className="text-sm text-gray-500">
                  Deadline: {new Date(op.deadline).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, count, icon, color }) => {
  const bgColor = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    purple: 'bg-purple-100 text-purple-700',
  }[color];

  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm flex flex-col items-center justify-center">
      <div className={`text-3xl ${bgColor} rounded-full w-12 h-12 flex items-center justify-center`}>
        {icon}
      </div>
      <p className="text-sm text-gray-600 mt-2">{label}</p>
      <p className="text-2xl font-bold text-gray-800">{count}</p>
    </div>
  );
};

export default Dashboard;*/



// Dashboard.jsx
/*import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [deptFilter, setDeptFilter] = useState("All Departments");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await axios.get("/api/opportunities");
        setOpportunities(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching opportunities:", err);
        setOpportunities([]);
      }
    };
    fetchOpportunities();
  }, []);

  const filtered = opportunities.filter((op) => {
    const matchesSearch =
      op.company?.toLowerCase().includes(search.toLowerCase()) ||
      op.title?.toLowerCase().includes(search.toLowerCase());

    const matchesType = typeFilter === "All Types" || op.type === typeFilter;
    const matchesDept =
      deptFilter === "All Departments" ||
      op.departments?.includes(deptFilter);

    return matchesSearch && matchesType && matchesDept;
  });

  const endingSoonCount = filtered.filter(
    (op) => new Date(op.deadline) - new Date() < 5 * 86400000
  ).length;

  const uniqueCompanies = [...new Set(filtered.map((op) => op.company))];

  return (
    <div className="p-6 bg-[#f9fafb] min-h-screen font-sans">
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2 text-[#0f172a]">
            🏢 Placement Opportunities
          </h1>
          <p className="text-sm text-gray-500">Welcome, MVSRins</p>
        </div>
        <div className="flex gap-4 items-center">
      
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="text-gray-500 hover:text-red-600 text-sm"
          >
            🔓 Logout
          </button>
        </div>
      </div>

      
      <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4 items-center mb-6">
        <input
          type="text"
          placeholder="🔍 Search by company or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/4"
        >
          <option>All Types</option>
          <option>Internship</option>
          <option>Full-time</option>
          <option>Part-time</option>
        </select>
        <select
          value={deptFilter}
          onChange={(e) => setDeptFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/4"
        >
          <option>All Departments</option>
          <option>CSE</option>
          <option>ECE</option>
          <option>MECH</option>
          <option>EEE</option>
          <option>IT</option>
          <option>CIVIL</option>
        </select>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          label="Available Opportunities"
          count={filtered.length}
          icon="📄"
          color="blue"
        />
        <StatCard
          label="Ending Soon"
          count={endingSoonCount}
          icon="⏰"
          color="green"
        />
        <StatCard
          label="Companies"
          count={uniqueCompanies.length}
          icon="👥"
          color="purple"
        />
      </div>

      
      <div>
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-4xl">📄</p>
            <p className="text-lg font-semibold mt-2">No opportunities found</p>
            <p className="text-sm">
              Check back later for new placement opportunities.
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {filtered.map((op) => (
              <li
                key={op._id}
                onClick={() => navigate(`/opportunity/${op._id}`)}
                className="p-4 bg-white rounded shadow border border-gray-200 cursor-pointer hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold text-blue-700">
                  {op.title} at {op.company}
                </h2>
                <p className="text-sm text-gray-600">
                  <strong>Type:</strong> {op.type} |{" "}
                  <strong>Dept:</strong>{" "}
                  {Array.isArray(op.departments)
                    ? op.departments.join(", ")
                    : op.departments}
                </p>
                <p className="text-sm text-gray-500">
                  Deadline: {new Date(op.deadline).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, count, icon, color }) => {
  const bgColor = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
  }[color];

  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm flex flex-col items-center justify-center">
      <div
        className={`text-3xl ${bgColor} rounded-full w-12 h-12 flex items-center justify-center`}
      >
        {icon}
      </div>
      <p className="text-sm text-gray-600 mt-2">{label}</p>
      <p className="text-2xl font-bold text-gray-800">{count}</p>
    </div>
  );
};

export default Dashboard;*/


// src/pages/Dashboard.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [deptFilter, setDeptFilter] = useState("All Departments");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await axios.get("/api/opportunities");
        setOpportunities(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching opportunities:", err);
        setOpportunities([]);
      } finally {
        setLoading(false);
      }
    };
    fetchOpportunities();
  }, []);

  // helper to read fields safely (works with multiple schemas)
  const getTitle = (op) => op.title || op.role || "";
  const getType = (op) => op.type || op.jobType || "";
  const getDepartments = (op) => {
    if (Array.isArray(op.departments)) return op.departments;
    if (op.department) return [op.department];
    return [];
  };
  const getDeadline = (op) => {
    const d = op.deadline ? new Date(op.deadline) : null;
    return isNaN(d?.getTime?.()) ? null : d;
  };

  // active opportunities = those not expired (deadline in future OR no deadline)
  const activeOpportunities = useMemo(() => {
    const now = Date.now();
    return opportunities.filter((op) => {
      const dl = getDeadline(op);
      // treat items without deadline as active (change if you want otherwise)
      if (!dl) return true;
      return dl.getTime() >= now;
    });
  }, [opportunities]);

  // counts based on active opportunities (not affected by search/filter)
  const stats = useMemo(() => {
    const now = Date.now();
    const ENDING_SOON_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

    const availableCount = activeOpportunities.length;
    const endingSoonCount = activeOpportunities.filter((op) => {
      const dl = getDeadline(op);
      if (!dl) return false;
      const timeDiff = dl.getTime() - now;
      return timeDiff >= 0 && timeDiff <= ENDING_SOON_MS;
    }).length;

    const uniqueCompanies = [
      ...new Set(
        activeOpportunities
          .map((o) => (o.company || "").toString().trim().toLowerCase())
          .filter(Boolean)
      ),
    ].length;

    return { availableCount, endingSoonCount, uniqueCompanies };
  }, [activeOpportunities]);

  // filtered list that will be displayed (applies search / type / department on active opportunities)
  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();

    return activeOpportunities.filter((op) => {
      const title = getTitle(op).toLowerCase();
      const company = (op.company || "").toString().toLowerCase();
      const matchesSearch = !s || title.includes(s) || company.includes(s);

      const opType = getType(op);
      const matchesType = typeFilter === "All Types" || opType === typeFilter;

      const departments = getDepartments(op);
      const matchesDept =
        deptFilter === "All Departments" ||
        departments.map((d) => d.toString()).includes(deptFilter);

      return matchesSearch && matchesType && matchesDept;
    });
  }, [activeOpportunities, search, typeFilter, deptFilter]);

  return (
    <div className="p-6 bg-[#f9fafb] min-h-screen font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2 text-[#0f172a]">
            🏢 Placement Opportunities
          </h1>
          <p className="text-sm text-gray-500">Welcome, MVSRins</p>
        </div>

        <div className="flex gap-4 items-center">
          
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="text-gray-500 hover:text-red-600 text-sm"
          >
            🔓 Logout
          </button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4 items-center mb-6">
        <input
          type="text"
          placeholder="🔍 Search by company or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none"
        />

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/4"
        >
          <option>All Types</option>
          <option>Internship</option>
          <option>Full-time</option>
          <option>Part-time</option>
        </select>

        <select
          value={deptFilter}
          onChange={(e) => setDeptFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full md:w-1/4"
        >
          <option>All Departments</option>
          <option>CSE</option>
          <option>ECE</option>
          <option>MECH</option>
          <option>EEE</option>
          <option>IT</option>
          <option>CIVIL</option>
          <option>AIML</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          label="Available Opportunities"
          count={stats.availableCount}
          icon="📄"
          color="blue"
        />
        <StatCard
          label="Ending Soon"
          count={stats.endingSoonCount}
          icon="⏰"
          color="green"
        />
        <StatCard
          label="Companies"
          count={stats.uniqueCompanies}
          icon="👥"
          color="purple"
        />
      </div>

      {/* Opportunity list */}
      <div>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-4xl">📄</p>
            <p className="text-lg font-semibold mt-2">No opportunities found</p>
            <p className="text-sm">
              Check back later for new placement opportunities.
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {filtered.map((op) => {
              const dl = getDeadline(op);
              return (
                <li
                  key={op._id}
                  onClick={() => navigate(`/opportunity/${op._id}`)}
                  className="p-4 bg-white rounded shadow border border-gray-200 cursor-pointer hover:shadow-lg transition"
                >
                  <h2 className="text-lg font-semibold text-blue-700">
                    {getTitle(op)}{op.company ? " at " + op.company : ""}
                  </h2>

                  <p className="text-sm text-gray-600">
                    <strong>Type:</strong> {getType(op) || "—"}{" "}
                    | <strong>Dept:</strong>{" "}
                    {getDepartments(op).length > 0
                      ? getDepartments(op).join(", ")
                      : "—"}
                  </p>

                  <p className="text-sm text-gray-500">
                    Deadline: {dl ? dl.toLocaleDateString() : "—"}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, count, icon, color }) => {
  const bgColor = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
  }[color];

  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm flex flex-col items-center justify-center">
      <div
        className={`text-3xl ${bgColor} rounded-full w-12 h-12 flex items-center justify-center`}
      >
        {icon}
      </div>
      <p className="text-sm text-gray-600 mt-2">{label}</p>
      <p className="text-2xl font-bold text-gray-800">{count}</p>
    </div>
  );
};

export default Dashboard;


