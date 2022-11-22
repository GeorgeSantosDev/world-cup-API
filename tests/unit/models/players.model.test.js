const sinon = require('sinon');
const { expect } = require('chai');
const { playersModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const playersMocks = require('../../Mocks/players.mocks');

describe('Test model layer of players path', function() {
  afterEach(sinon.restore);

  it('should return all players', async function() {
    sinon.stub(connection, 'execute').resolves([playersMocks.allPlayers]);
    const response = await playersModel.findAll();
    expect(response).to.be.deep.equal(playersMocks.allPlayers);
  });

  it('should return a players by id', async function() {
    sinon.stub(connection, 'execute').resolves([[playersMocks.allPlayers[0]]]);
    const response = await playersModel.findById(1);
    expect(response).to.be.deep.equal(playersMocks.allPlayers[0]);
  });

  it('should return a players by name', async function() {
    sinon.stub(connection, 'execute').resolves([[playersMocks.allPlayers[0]]]);
    const response = await playersModel.findByName('Cristiano Ronaldo');
    expect(response).to.be.deep.equal(playersMocks.allPlayers[0]);
  });

  it('should return all players from the same country by country id', async function() {
    sinon.stub(connection, 'execute').resolves([playersMocks.allPlayers]);
    const response = await playersModel.findByCountryId(1);
    expect(response).to.be.deep.equal(playersMocks.allPlayers);
  });
});