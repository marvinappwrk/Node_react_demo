const express = require('express'); //import express
const router  = express.Router();
const tutorialController = require('../controllers/tutorialController.js');

router.get('/tutorials', tutorialController.findAll);
router.post('/tutorials', tutorialController.create);
router.delete('/tutorials', tutorialController.deleteAll);
router.delete('/tutorials/:name', tutorialController.findOne);

router.get('/tutorials/:name', tutorialController.findOne);
router.put('/tutorials/:name', tutorialController.update);

// router.get('/api/tutorials/:name', tutorialController.findAllPublished);

module.exports = router; // export to use in server.js