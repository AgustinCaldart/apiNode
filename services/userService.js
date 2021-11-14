/* const pool = require('../libs/postgresPool'); */

const { models } = require('./../libs/sequelize');
class UserService {
  constructor() {
    /* this.pool = pool;
    this.pool.on('error', (err) => console.log(err)); */
  }

  async create(data) {
    return data;
  }

  /* async find() {
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows;
  } */
  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
