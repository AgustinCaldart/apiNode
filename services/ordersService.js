const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
class OrderService {
  constructor() {}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }
  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async findByUser(userId) {
    const orders = await models.Order.findAll({
      where: {
        '$costumer.user.id$': userId,
      },
      include: [
        {
          association: 'costumer',
          include: ['user'],
        },
      ],
    });
    return orders;
  }

  async find() {
    const rta = await models.Order.findAll();
    return rta;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'costumer',
          include: ['user'],
        },
        'items',
      ],
    });
    if (!order) {
      throw boom.notFound('order not found');
    }
    return order;
  }

  async update(id, changes) {
    const order = await this.findOne(id);
    if (!order) {
      throw boom.notFound('order not found');
    }
    const rta = await order.update(changes);
    return rta;
  }

  async delete(id) {
    const order = await this.findOne(id);
    if (!order) {
      throw boom.notFound('order not found');
    }
    await order.destroy();
    return { id };
  }

  async createFromProfile(data) {
    // Accedemos al modelo Customer y usando where encadenamos hacia user
    const customer = await models.Customer.findAll({
      where: {
        '$user.id$': data.userId,
      },
      include: ['user'],
    });
    // Validamos que exista el customer
    if (!customer) {
      throw boom.notFound('Customer not found');
    }
    // Creamos un objeto con el customerId obtenido de la consulta
    const dataOrder = {
      customerId: customer[0].id,
    };
    const newOrder = await models.Order.create(dataOrder);
    return newOrder;
  }
}

module.exports = OrderService;
