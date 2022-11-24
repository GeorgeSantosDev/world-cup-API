const { playersService } = require('../services');

const errorMap = require('../../utils/errorMap');

const getAllPlayers = async (_, res) => {
  const { type, message } = await playersService.findAllPlayers();

  if (!type) return res.status(200).json(message);

  return res.status(errorMap.mapError(type)).json({ message });
};

const getPlayerById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await playersService.findPlayerById(id);

  if (!type) return res.status(200).json(message);

  return res.status(errorMap.mapError(type)).json({ message });
};

const getPlayerByCountryId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await playersService.findPlayerByCountryId(id);

  if (!type) return res.status(200).json(message);

  return res.status(errorMap.mapError(type)).json({ message });
};

module.exports = {
  getAllPlayers,
  getPlayerById,
  getPlayerByCountryId,
};
