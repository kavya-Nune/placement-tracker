import React, { useState } from "react";
import axios from "axios";

const AddOpportunity = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    deadline: "",
    description: "",
    type: "Full-time",
    departments: [],
    eligibility: "",
    packageCTC: "",
    applyLink: "", // ✅ New field
  });

  const branchesList = ["CSE", "ECE", "EEE", "MECH", "CIVIL", "IT", "AIML"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBranchChange = (branch) => {
    setFormData((prev) => {
      if (prev.departments.includes(branch)) {
        return {
          ...prev,
          departments: prev.departments.filter((b) => b !== branch),
        };
      } else {
        return { ...prev, departments: [...prev.departments, branch] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form:", formData);

    try {
      const res = await axios.post("http://localhost:5000/api/opportunities", formData);
      alert("✅ Opportunity Added Successfully!");
      console.log("Response:", res.data);

      setFormData({
        title: "",
        company: "",
        location: "",
        deadline: "",
        description: "",
        type: "Full-time",
        departments: [],
        eligibility: "",
        packageCTC: "",
        applyLink: "",
      });
    } catch (error) {
      console.error("❌ Error adding opportunity:", error.response?.data || error.message);
      alert("Failed to add opportunity. Check console for details.");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto mt-10 border rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Opportunity</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Job Description"
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
        </select>

        <label className="block font-medium">Eligible Branches</label>
        <div className="grid grid-cols-2 gap-2">
          {branchesList.map((branch) => (
            <label key={branch} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={branch}
                checked={formData.departments.includes(branch)}
                onChange={() => handleBranchChange(branch)}
              />
              <span>{branch}</span>
            </label>
          ))}
        </div>

        <input
          type="text"
          name="eligibility"
          value={formData.eligibility}
          onChange={handleChange}
          placeholder="Eligibility (optional)"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="packageCTC"
          value={formData.packageCTC}
          onChange={handleChange}
          placeholder="Package / CTC (optional)"
          className="w-full p-2 border rounded"
        />

        {/* ✅ Apply Link Field */}
        <input
          type="url"
          name="applyLink"
          value={formData.applyLink}
          onChange={handleChange}
          placeholder="Application Link (e.g. https://careers.company.com/apply)"
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddOpportunity;



