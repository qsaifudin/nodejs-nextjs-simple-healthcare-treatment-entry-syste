const express = require('express');
const formController = require('../controllers/formController');
const router = express.Router();

router.post('/form', formController.createForm);
router.get('/form', formController.getAllForms);
router.get('/form/:id', formController.getForm);
router.put('/form/:id', formController.updateForm);
router.delete('/form/:id', formController.deleteForm);

module.exports = router;