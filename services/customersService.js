const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CostumerService {
  constructor() {}
  async create(data) {
    const newCostumer = await models.Costumer.create(data, {
      include: ['user'],
    });
    return newCostumer;
  }

  async find() {
    const rta = await models.Costumer.findAll({
      include: ['user'],
    });
    return rta;
  }

  async findOne(id) {
    const costumer = await models.Costumer.findByPk(id);
    if (!costumer) {
      throw boom.notFound('Costumer not found');
    }
    return costumer;
  }

  async update(id, changes) {
    const costumer = await this.findOne(id);
    if (!costumer) {
      throw boom.notFound('Costumer not found');
    }
    const rta = await costumer.update(changes);
    return rta;
  }

  async delete(id) {
    const costumer = await this.findOne(id);
    if (!costumer) {
      throw boom.notFound('Costumer not found');
    }
    await costumer.destroy();
    return { id };
  }
}

module.exports = CostumerService;
