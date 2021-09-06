const controller = require('./building.controller');

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  return controller.getAllBuildingWithClassrooms(req, res, next);
});

router.put('/', (req, res, next) => {
  return controller.updateBuilding(req, res, next);
});

module.exports = router;