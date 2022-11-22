const { expect } = require('chai');
const sinon = require('sinon');

const { playersModel } = require('../../../src/models');
const { playersService } = require('../../../src/services');
const playersMocks = require('../../Mocks/players.mocks');


describe('Test service layer of players path', function() {
  afterEach(sinon.restore)

  it('should return an object with type INTERNAL_ERROR and message "Internal error" for findAllPlayers function', async function() {
    sinon.stub(playersModel, 'findAll').resolves(undefined);
    const response = await playersService.findAllPlayers();
    expect(response).to.be.deep.equal(playersMocks.messageInternalError);
  });

  it('should return an object with type null and message {[ all players ]} for findAllPlayers function', async function() {
    sinon.stub(playersModel, 'findAll').resolves(playersMocks.allPlayers);
    const response = await playersService.findAllPlayers();
    expect(response).to.be.deep.equal(playersMocks.messageSuccessFindAllPlayers);
  });

  it('should return an object with type PLAYER_NOT_FOUND and message "Player not found!" for findPlayerById function', async function() {
    sinon.stub(playersModel, 'findById').resolves(undefined);
    const response = await playersService.findPlayerById(1);
    expect(response).to.be.deep.equal(playersMocks.messagePlayerNotFound);
  });

  it('should return an object with type null and message { player info } for findPlayerById function', async function() {
    sinon.stub(playersModel, 'findById').resolves(playersMocks.allPlayers[0]);
    const response = await playersService.findPlayerById(1);
    expect(response).to.be.deep.equal(playersMocks.messageSuccessFindPlayer);
  });

  it('should return an object with type PLAYER_NOT_FOUND and message "Player not found!" for findPlayerByName function', async function() {
    sinon.stub(playersModel, 'findByName').resolves(undefined);
    const response = await playersService.findPlayerByName('Lionel Messi');
    expect(response).to.be.deep.equal(playersMocks.messagePlayerNotFound);
  });

  it('should return an object with type null and message { player info } for findPlayerByName function', async function() {
    sinon.stub(playersModel, 'findByName').resolves(playersMocks.allPlayers[0]);
    const response = await playersService.findPlayerByName(1);
    expect(response).to.be.deep.equal(playersMocks.messageSuccessFindPlayer);
  });

  it('should return an object with type PLAYER_NOT_FOUND and message "Player not found!" for findPlayerByCountryId function', async function() {
    sinon.stub(playersModel, 'findByCountryId').resolves(undefined);
    const response = await playersService.findPlayerByCountryId(1);
    expect(response).to.be.deep.equal(playersMocks.messagePlayerNotFound);
  });

  it('should return an object with type null and message { player info } for findPlayerByCountryId function', async function() {
    sinon.stub(playersModel, 'findByCountryId').resolves(playersMocks.allPlayers[0]);
    const response = await playersService.findPlayerByCountryId(1);
    expect(response).to.be.deep.equal(playersMocks.messageSuccessFindPlayer);
  });
});