const { playersModel } = require('../models');

const findAllPlayers = async () => {
  const players = await playersModel.findAll();

  if (players) return { type: null, message: players };

  return { type: 'INTERNAL_ERROR', message: 'Internal error' };
};

const findPlayerById = async (id) => {
  const player = await playersModel.findById(id);

  if (player) return { type: null, message: player };

  return { type: 'PLAYER_NOT_FOUND', message: 'Player not found' };
};

const findPlayerByCountryId = async (countryId) => {
  const player = await playersModel.findByCountryId(countryId);

  if (player) return { type: null, message: player };

  return { type: 'PLAYER_NOT_FOUND', message: 'Player not found' };
};

module.exports = {
  findAllPlayers,
  findPlayerById,
  findPlayerByCountryId,
};