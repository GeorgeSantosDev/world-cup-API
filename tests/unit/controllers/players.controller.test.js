const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { playersService } = require('../../../src/services');
const { playersController } = require('../../../src/controllers');
const playersMock = require('../../Mocks/players.mocks');

describe('Test controller layer of players path', function () {
  afterEach(sinon.restore);

  it('should return status 500 and message with "Internal server error" for getAllPlayers function', async function() {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(playersService, 'findAllPlayers')
      .resolves(playersMock.internalErrorReturn);

    await playersController.getAllPlayers(req, res);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith({ message: playersMock.internalErrorReturn.message });
  });

  it('should return status 200 and message with all players for getAllPlayers function', async function() {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(playersService, 'findAllPlayers')
      .resolves(playersMock.successReturnGetAllPlayers);

    await playersController.getAllPlayers(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(playersMock.allPlayers);
  });

  it('should return status 404 and message with "Player not Found" for getPlayerById function', async function() {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(playersService, 'findPlayerById')
      .resolves(playersMock.playerNotFoundReturn);

    await playersController.getPlayerById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: playersMock.playerNotFoundReturn.message });
  });

  it('should return status 200 and message with a player for getPlayerById function', async function() {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(playersService, 'findPlayerById')
      .resolves(playersMock.successReturnGetPlayerById);

    await playersController.getPlayerById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(playersMock.allPlayers[0]);
  });

  it('should return status 404 and message with "Player not Found" for getPlayerByCountryId function', async function() {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(playersService, 'findPlayerByCountryId')
      .resolves(playersMock.playerNotFoundReturn);

    await playersController.getPlayerByCountryId(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: playersMock.playerNotFoundReturn.message });
  });

  it('should return status 200 and message with all players for getPlayerByCountryId function', async function() {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(playersService, 'findPlayerByCountryId')
      .resolves(playersMock.successReturnGetAllPlayers);

    await playersController.getPlayerByCountryId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(playersMock.allPlayers);
  });
});
