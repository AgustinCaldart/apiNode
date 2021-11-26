const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CostumerService {
  constructor() {}
  async create(data) {
    const newCostumer = await models.Costumer.create(data, {
      include: ['user'],
    });
    /* console.log(newCostumer.dataValues); */
    delete newCostumer.dataValues.user.dataValues.password;
    return newCostumer;
  }

  async find() {
    const rta = await models.Costumer.findAll({
      include: ['user'],
    });
    /* console.log(rta.map((item) => item.dataValues.user.dataValues.password)); */
    return rta;
  }

  async findOne(id) {
    const costumer = await models.Costumer.findByPk(id, {
      include: ['user'],
    });
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
