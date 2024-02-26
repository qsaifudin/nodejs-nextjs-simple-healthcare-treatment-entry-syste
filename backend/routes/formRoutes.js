const express = require("express");
const formController = require("../controllers/formController");
const router = express.Router();

router.post("/form", formController.createForm); // Add Treatment
router.get("/form", formController.getAllForms); // Get All Treatments
router.get("/form/:id", formController.getForm); // Get Single Treatment by ID
router.put("/form/:id", formController.updateForm); // Update Treatment by ID
router.delete("/form/:id", formController.deleteForm); // Delete Treatment by ID

module.exports = router;
