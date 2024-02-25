const db = require("../config/firebaseConfig");
const admin = require('firebase-admin');

exports.createForm = async (req, res) => {
  try {
    const {
      patientName,
      patientId,
      dateOfTreatment,
      treatmentDescription,
      medicationsPrescribed,
      costOfTreatment,
    } = req.body;

    const timestamp = admin.firestore.FieldValue.serverTimestamp();

    const data = {
      patientName,
      patientId,
      dateOfTreatment,
      treatmentDescription,
      medicationsPrescribed,
      costOfTreatment,
      createdAt: timestamp
    };
    console.log("🚀 ~ exports.createForm= ~ data:", data)
    const responseDb = await db.collection("treatments").add(data);
    res.success("Form created successfully", responseDb);
  } catch (error) {
    res.error500("Error creating form", error.message);
  }
};

exports.getAllForms = async (req, res) => {
  try {
    const snapshot = await db.collection("treatments").orderBy("createdAt", "desc").get();
    const forms = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.success("Forms retrieved successfully", forms);
  } catch (error) {
    res.error500("Error retrieving forms", error.message);
  }
};

exports.getForm = async (req, res) => {
  try {
    const formRef = db.collection("treatments").doc(req.params.id);
    const doc = await formRef.get();
    if (!doc.exists) {
      res.error400("No such form found");
    } else {
      res.success("Form retrieved successfully", { id: doc.id, ...doc.data() });
    }
  } catch (error) {
    res.error500("Error retrieving form", error.message);
  }
};

exports.updateForm = async (req, res) => {
  try {
    const updatedForm = req.body;
    const formRef = db.collection("treatments").doc(req.params.id);
    await formRef.update(updatedForm);
    res.send("Form updated successfully");
  } catch (error) {
    res.error500("Error updating form", error.message);
  }
};

exports.deleteForm = async (req, res) => {
  try {
    const formRef = db.collection("treatments").doc(req.params.id);
    await formRef.delete();
    res.send("Form deleted successfully");
  } catch (error) {
    res.error500("Error deleting form", error.message);
  }
};
