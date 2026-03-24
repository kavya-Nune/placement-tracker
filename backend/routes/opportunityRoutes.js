/*import express from 'express';
import { getOpportunities } from '../controllers/opportunityController.js';

const router = express.Router();

router.get('/', getOpportunities); 

export default router;*/


// routes/opportunityRoutes.js
/*import express from 'express';
import { getOpportunities, createOpportunity } from '../controllers/opportunityController.js';

const router = express.Router();

router.get('/', getOpportunities);
router.post('/', createOpportunity); // ADMIN POST route

export default router;*/


/*import express from 'express';
import { getOpportunities, createOpportunity, getOpportunityById } from '../controllers/opportunityController.js';

const router = express.Router();

router.get('/', getOpportunities);
router.post('/', createOpportunity); // ADMIN POST route
router.get('/:id', getOpportunityById); // ✅ single opportunity

export default router;*/



import express from "express";
import {
  getOpportunities,
  createOpportunity,
  getOpportunityById,
} from "../controllers/opportunityController.js";

const router = express.Router();

router.get("/", getOpportunities);
router.post("/", createOpportunity);
router.get("/:id", getOpportunityById);

export default router;



