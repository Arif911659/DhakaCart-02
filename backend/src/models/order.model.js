const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Order', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    status: { type: DataTypes.ENUM('pending','paid','shipped','cancelled'), defaultValue: 'pending' },
    qty: { type: DataTypes.INTEGER, defaultValue: 1 },
    total: { type: DataTypes.DECIMAL(10,2) },
    shippingAddress: { type: DataTypes.JSONB, defaultValue: {} }
  });
};
