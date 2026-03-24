/*import mongoose from 'mongoose';

const opportunitySchema = new mongoose.Schema({
  company: String,
  role: String,
  type: String, // Full-time, Internship
  department: String,
  deadline: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Opportunity', opportunitySchema);*/


// models/Opportunity.js
//import mongoose from 'mongoose';

/*const opportunitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    deadline: { type: Date, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Opportunity', opportunitySchema);*/

/*import mongoose from 'mongoose';

const opportunitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    deadline: { type: Date, required: true },
    description: { type: String, required: true },

    // ✅ New fields
    type: {
      type: String,
      enum: ['Internship', 'Full-time', 'Part-time'],
      required: true,
    },
    departments: [
      {
        type: String,
        required: true,
      },
    ], // ✅ array so multiple branches can be selected
    eligibility: { type: String },
    packageCTC: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('Opportunity', opportunitySchema);*/




/*import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    deadline: { type: Date, required: true },
    description: { type: String, required: true },

    // ✅ Matches frontend exactly
    type: {
      type: String,
      enum: ["Internship", "Full-time", "Part-time"],
      required: true,
    },
    departments: {
      type: [String], // multiple allowed
      required: true,
    },

    eligibility: { type: String },
    packageCTC: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Opportunity", opportunitySchema);*/

import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    deadline: { type: Date, required: true },
    description: { type: String, required: true },

    type: {
      type: String,
      enum: ["Internship", "Full-time", "Part-time"],
      required: true,
    },

    departments: {
      type: [String],
      required: true,
    },

    eligibility: { type: String },
    packageCTC: { type: String },

    // ✅ Apply link field
    applyLink: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Opportunity", opportunitySchema);
