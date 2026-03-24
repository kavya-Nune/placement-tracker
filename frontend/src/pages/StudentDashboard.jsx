import React, { useEffect, useState } from 'react';

const StudentDashboard = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await fetch('/api/opportunities'); // make sure proxy is set in vite.config or package.json
        const data = await res.json();
        setOpportunities(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load opportunities:', err);
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Available Opportunities</h2>
        {loading ? (
          <p>Loading...</p>
        ) : opportunities.length === 0 ? (
          <p>No opportunities available.</p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opp) => (
              <li key={opp._id} className="border rounded p-4 bg-blue-50 shadow">
                <h3 className="text-lg font-bold">{opp.title}</h3>
                <p className="text-sm text-gray-700">Company: {opp.company}</p>
                <p className="text-sm text-gray-700">Location: {opp.location}</p>
                <p className="text-sm text-gray-700">Deadline: {new Date(opp.deadline).toLocaleDateString()}</p>
                <p className="text-sm mt-2">{opp.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
