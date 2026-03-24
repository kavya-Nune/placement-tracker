/*import Opportunity from "../models/Opportunity.js";

// ✅ Get all opportunities
export const getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find().sort({ createdAt: -1 });
    res.json(opportunities);
  } catch (error) {
    console.error("❌ Error fetching opportunities:", error.message);
    res.status(500).json({ message: "Failed to fetch opportunities" });
  }
};


export const createOpportunity = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      deadline,
      description,
      type,          // ✅ same as frontend
      departments,   // ✅ same as frontend
      eligibility,
      packageCTC,
    } = req.body;

    console.log("📥 Incoming Opportunity:", req.body);

    const newOpportunity = new Opportunity({
      title,
      company,
      location,
      deadline,
      description,
      type,
      departments,
      eligibility,
      packageCTC,
    });

    await newOpportunity.save();
    res.status(201).json({ message: "✅ Opportunity created successfully" });
  } catch (error) {
    console.error("❌ Error creating opportunity:", error.message);
    res.status(500).json({ message: "Failed to create opportunity" });
  }
};*/


/*import Opportunity from "../models/Opportunity.js";

// ✅ Get all opportunities
export const getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find().sort({ createdAt: -1 });
    res.json(opportunities);
  } catch (error) {
    console.error("❌ Error fetching opportunities:", error.message);
    res.status(500).json({ message: "Failed to fetch opportunities" });
  }
};

// ✅ Create new opportunity
export const createOpportunity = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      deadline,
      description,
      type,
      departments,
      eligibility,
      packageCTC,
    } = req.body;

    console.log("📥 Incoming Opportunity:", req.body);

    const newOpportunity = new Opportunity({
      title,
      company,
      location,
      deadline,
      description,
      type,
      departments,
      eligibility,
      packageCTC,
    });

    await newOpportunity.save();
    res.status(201).json({ message: "✅ Opportunity created successfully" });
  } catch (error) {
    console.error("❌ Error creating opportunity:", error.message);
    res.status(500).json({ message: "Failed to create opportunity" });
  }
};

// ✅ Get single opportunity by ID
export const getOpportunityById = async (req, res) => {
  try {
    const opportunity = await Opportunity.findById(req.params.id);
    if (!opportunity) {
      return res.status(404).json({ message: "Opportunity not found" });
    }
    res.json(opportunity);
  } catch (error) {
    console.error("❌ Error fetching opportunity:", error.message);
    res.status(500).json({ message: "Failed to fetch opportunity" });
  }
};*/


import Opportunity from "../models/Opportunity.js";

// ✅ Get all opportunities
export const getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find().sort({ createdAt: -1 });
    res.json(opportunities);
  } catch (error) {
    console.error("❌ Error fetching opportunities:", error.message);
    res.status(500).json({ message: "Failed to fetch opportunities" });
  }
};

// ✅ Create new opportunity
export const createOpportunity = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      deadline,
      description,
      type,
      departments,
      eligibility,
      packageCTC,
      applyLink, // ✅ Added field
    } = req.body;

    console.log("📥 Incoming Opportunity:", req.body);

    const newOpportunity = new Opportunity({
      title,
      company,
      location,
      deadline,
      description,
      type,
      departments,
      eligibility,
      packageCTC,
      applyLink, // ✅ Added
    });

    await newOpportunity.save();
    res.status(201).json({ message: "✅ Opportunity created successfully" });
  } catch (error) {
    console.error("❌ Error creating opportunity:", error.message);
    res.status(500).json({ message: "Failed to create opportunity" });
  }
};

// ✅ Get single opportunity by ID
export const getOpportunityById = async (req, res) => {
  try {
    const opportunity = await Opportunity.findById(req.params.id);
    if (!opportunity) {
      return res.status(404).json({ message: "Opportunity not found" });
    }
    res.json(opportunity);
  } catch (error) {
    console.error("❌ Error fetching opportunity:", error.message);
    res.status(500).json({ message: "Failed to fetch opportunity" });
  }
};


