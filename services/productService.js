const faker = require('faker');
const boom = require('@hapi/boom');

//const pool = require('../libs/postgresPool');
//const sequelize = require('../libs/sequelize');
const { models } = require('./../libs/sequelize');
class ProductsServices {
  constructor() {
    this.products = [];
    /*  this.pool = pool;
    this.pool.on('error', (err) => console.log(err)); // manejo de error */
  }

  generete() {
    const limit = 5;
    for (let index = 0; index < (limit || 15); index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  /*  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 1);
    });
  } */

  /*  async find() {
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows;
  }
 */
  /*  async find() {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return data;
  } */

  async find() {
    const rta = await models.Product.findAll();
    return rta;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('produc not found');
    }
    if (product.isBlock) {
      throw boom.conflict('produc is block');
    }
    return product;
  }
  async update(id, change) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...change,
    };
    return this.products[index];
  }
  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}
module.exports = ProductsServices;
