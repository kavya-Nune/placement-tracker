import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [opps, setOpps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/opportunities')
      .then(res => setOpps(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
          className="text-red-500"
        >Logout</button>
      </div>

      <div className="grid gap-4 mt-6 sm:grid-cols-3">
        <Stat label="Total Opportunities" count={opps.length} />
        <Stat label="Active Opportunities" count={opps.filter(o => new Date(o.deadline) > new Date()).length} />
        <Stat label="Unique Companies" count={[...new Set(opps.map(o => o.company))].length} />
      </div>

      <button
        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded"
        onClick={() => navigate('/add-opportunity')}
      >+ Add Opportunity</button>

      <div className="mt-6">
        {opps.length === 0 ? (
          <p>No opportunities yet. Add one.</p>
        ) : (
          <table className="w-full mt-4 border">
            <thead>
              <tr className="text-left">
                <th>Company & Role</th>
                <th>Type</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {opps.map(op => (
                <tr key={op._id}>
                  <td>
                    <div className="font-semibold">{op.company}</div>
                    <div className="text-sm text-gray-600">{op.role}</div>
                  </td>
                  <td>{op.type}</td>
                  <td>{new Date(op.deadline).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const Stat = ({ label, count }) => (
  <div className="bg-gray-100 p-4 rounded shadow">
    <div className="text-sm text-gray-600">{label}</div>
    <div className="text-2xl font-bold">{count}</div>
  </div>
);

export default AdminDashboard;

