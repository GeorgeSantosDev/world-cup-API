const allPlayers = [
  {  id: 1,
    name: 'Lionel Messi',
    countryId: 19
  },
  {  id: 2,
    name: 'Neymar Junior',
    countryId: 25
  },
  {  id: 3,
    name: 'Cristiano Ronaldo',
    countryId: 29
  },
];

const messageInternalError = { type: 'INTERNAL_ERROR', message: 'Internal error' };
const messageSuccessFindAllPlayers = { type: null, message: allPlayers };

const messagePlayerNotFound = { type: 'PLAYER_NOT_FOUND', message: 'Player not found' };
const messageSuccessFindPlayer = { type: null, message: allPlayers[0] };

const internalErrorReturn = { type: 'INTERNAL_SERVER_ERROR', message: 'Internal server error!' };
const playerNotFoundReturn = { type: 'PLAYER_NOT_FOUND', message: 'Player not found' };

const successReturnGetAllPlayers = { type: null, message: allPlayers };
const successReturnGetPlayerById = { type: null, message: allPlayers[0] };

module.exports = {
  allPlayers,
  messageInternalError,
  messageSuccessFindAllPlayers,
  messagePlayerNotFound,
  messageSuccessFindPlayer,
  internalErrorReturn,
  successReturnGetAllPlayers,
  playerNotFoundReturn,
  successReturnGetPlayerById,
};