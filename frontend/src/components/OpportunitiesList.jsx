import React, { useEffect, useState } from "react";
import axios from "axios";

const OpportunitiesList = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/opportunities");
        setOpportunities(res.data);
      } catch (err) {
        console.error("Error fetching opportunities:", err);
      }
    };

    fetchOpportunities();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {opportunities.map((opp) => (
        <div key={opp._id} className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">{opp.role}</h3>
          <p className="text-gray-600">{opp.company}</p>
          <p className="text-sm text-gray-500">{opp.location}</p>
          <p className="mt-2">{opp.description}</p>
          <p className="text-sm text-blue-500 mt-2">Deadline: {new Date(opp.deadline).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default OpportunitiesList;
