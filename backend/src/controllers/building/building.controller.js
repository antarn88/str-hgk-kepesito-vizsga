/**
 * @TODO : controller elkészítése, mely kapcsolódik a megfelelő service osztályhoz
 *
 * Kezelje a http-error üzeneteket:
 * - hiányos értékek @update műveletkor: BadREquest => 'Missing field'
 * - ha valamiért nem tudta a server frissíteni a building entitást:
 *  InternalServerError => 'Could not updated building'
 *
 * A szerver a megfelelő válaszokat küldje el a kliens felé
 */

const httpError = require('http-errors');

const service = require('./building.service');
const classroomModel = require('../../models/classroom.model');

exports.updateBuilding = async (req, res, next) => {
  const { buildingId, className } = req.body;
  const classroomId = classroomModel.findOne({name: className});
  
  const updatedBuilding = await service.update(buildingId, { $push: { classrooms: classroomId }});
  return res.json(updatedBuilding);
}

exports.getAllBuildingWithClassrooms = async (req, res, next) => {
  const buildings = await service.getAll();
  return res.json(buildings);
};