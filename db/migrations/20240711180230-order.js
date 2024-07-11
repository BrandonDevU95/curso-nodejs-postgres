'use strict';

const { ORDERS_TABLE, OrderSchema } = require('../models/order.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDERS_TABLE, OrderSchema); // Este método crea la tabla en la base de datos con el nombre y el esquema que le pasamos
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDERS_TABLE); // Este método elimina la tabla de la base de datos
  },
};
