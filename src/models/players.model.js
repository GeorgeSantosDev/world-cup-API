const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [response] = await connection.execute(
    'SELECT * FROM WorldCup.players ORDER BY id ASC',
  );

  return camelize(response);
};

const findById = async (id) => {
  const [[response]] = await connection.execute(
    'SELECT * FROM WorldCup.players WHERE id = ?',
    [id],
  );

  return camelize(response);
};

const findByName = async (name) => {
  const [[response]] = await connection.execute(
    'SELECT * FROM WorldCup.players WHERE name = ?',
    [name],
  );

  return camelize(response);
};

const findByCountryId = async (countryId) => {
  const [response] = await connection.execute(
    'SELECT * FROM WorldCup.players WHERE country_id = ?',
    [countryId],
  );

  return camelize(response);
};

module.exports = {
  findAll,
  findById,
  findByName,
  findByCountryId,
};
