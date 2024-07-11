const { Model, DataTypes } = require('sequelize');
const { CUSTOMER_TABLE } = require('./customer.model');

const ORDERS_TABLE = 'orders';

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
  },
};

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, { as: 'customer' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDERS_TABLE,
      modelName: 'Order',
      timestamps: true,
    };
  }
}

module.exports = { Order, OrderSchema, ORDERS_TABLE };