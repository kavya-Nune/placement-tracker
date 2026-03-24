/*import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OpportunityDetail = () => {
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    axios.get(`/api/opportunities/${id}`)
      .then(res => setOpportunity(res.data))
      .catch(err => console.error("Error fetching opportunity:", err));
  }, [id]);

  if (!opportunity) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{opportunity.title}</h2>
      <p><strong>Company:</strong> {opportunity.company}</p>
      <p><strong>Location:</strong> {opportunity.location}</p>
      <p><strong>Type:</strong> {opportunity.type}</p>
      <p><strong>Departments:</strong> {opportunity.departments?.join(", ")}</p>
      <p><strong>Deadline:</strong> {new Date(opportunity.deadline).toLocaleDateString()}</p>
      <p><strong>Eligibility:</strong> {opportunity.eligibility || "N/A"}</p>
      <p><strong>Package/CTC:</strong> {opportunity.packageCTC || "N/A"}</p>
      <div className="mt-4">
        <strong>Description:</strong>
        <p className="whitespace-pre-line mt-2">{opportunity.description}</p>
      </div>

      <Link
        to="/dashboard"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ← Back to Opportunities
      </Link>
    </div>
  );
};

export default OpportunityDetail;*/




/*import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OpportunityDetail = () => {
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/opportunities/${id}`)
      .then((res) => setOpportunity(res.data))
      .catch((err) => console.error("Error fetching opportunity:", err));
  }, [id]);

  if (!opportunity) return <p className="p-6 text-center">Loading...</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{opportunity.title}</h2>
      <p><strong>Company:</strong> {opportunity.company}</p>
      <p><strong>Location:</strong> {opportunity.location}</p>
      <p><strong>Type:</strong> {opportunity.type}</p>
      <p><strong>Departments:</strong> {opportunity.departments?.join(", ")}</p>
      <p><strong>Deadline:</strong> {new Date(opportunity.deadline).toLocaleDateString()}</p>
      <p><strong>Eligibility:</strong> {opportunity.eligibility || "N/A"}</p>
      <p><strong>Package/CTC:</strong> {opportunity.packageCTC || "N/A"}</p>

      <div className="mt-4">
        <strong>Description:</strong>
        <p className="whitespace-pre-line mt-2">{opportunity.description}</p>
      </div>

     
      {opportunity.applyLink && (
        <a
          href={opportunity.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Apply Now
        </a>
      )}

      <Link
        to="/dashboard"
        className="mt-6 ml-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ← Back to Opportunities
      </Link>
    </div>
  );
};

export default OpportunityDetail;*/



/*import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OpportunityDetail = () => {
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/opportunities/${id}`)
      .then((res) => setOpportunity(res.data))
      .catch((err) => console.error("Error fetching opportunity:", err));
  }, [id]);

  if (!opportunity)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
        Loading opportunity details...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 transition-all hover:shadow-2xl duration-300">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
          {opportunity.title}
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Explore all the details before applying
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <p>
            <strong>Company:</strong> {opportunity.company}
          </p>
          <p>
            <strong>Location:</strong> {opportunity.location}
          </p>
          <p>
            <strong>Type:</strong> {opportunity.type}
          </p>
          <p>
            <strong>Departments:</strong>{" "}
            {opportunity.departments?.join(", ") || "N/A"}
          </p>
          <p>
            <strong>Deadline:</strong>{" "}
            {new Date(opportunity.deadline).toLocaleDateString()}
          </p>
          <p>
            <strong>Eligibility:</strong> {opportunity.eligibility || "N/A"}
          </p>
          <p>
            <strong>Package/CTC:</strong> {opportunity.packageCTC || "N/A"}
          </p>
        </div>

        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Description
          </h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {opportunity.description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {opportunity.applyLink && (
            <a
              href={opportunity.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Apply Now
            </a>
          )}

          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            ← Back to Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetail;*/

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OpportunityDetail = () => {
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/opportunities/${id}`)
      .then((res) => setOpportunity(res.data))
      .catch((err) => console.error("Error fetching opportunity:", err));
  }, [id]);

  if (!opportunity)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-lg">
        Loading opportunity details...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold">{opportunity.title}</h1>
          <p className="mt-1 text-sm sm:text-base">
            {opportunity.company} • {opportunity.location}
          </p>
        </div>

        {/* Job Info Grid */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <span className="font-semibold">Experience:</span> {opportunity.experience || "N/A"}
            </div>
            <div>
              <span className="font-semibold">Apply By:</span> {new Date(opportunity.deadline).toLocaleDateString()}
            </div>
            <div>
              <span className="font-semibold">CTC:</span> {opportunity.packageCTC || "N/A"}
            </div>
            <div>
              <span className="font-semibold">Departments:</span>{" "}
              {opportunity.departments?.join(", ") || "N/A"}
            </div>
          </div>

          {/* Skills / Tags */}
          {opportunity.skills && (
            <div className="flex flex-wrap gap-2">
              {opportunity.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">About the Job</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{opportunity.description}</p>
          </div>

          {/* Other Requirements */}
          {opportunity.otherRequirements && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Other Requirements</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {opportunity.otherRequirements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center sm:justify-start">
            {opportunity.applyLink && (
              <a
                href={opportunity.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Apply Now
              </a>
            )}
            <Link
              to="/dashboard"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              ← Back to Opportunities
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetail;

