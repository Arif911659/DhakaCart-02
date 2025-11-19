const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  return sequelize.define('Payment', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    orderId: { type: DataTypes.STRING },
    provider: { type: DataTypes.STRING }, // bkash, card, cod
    status: { type: DataTypes.ENUM('initiated','completed','failed'), defaultValue: 'initiated' },
    amount: { type: DataTypes.DECIMAL(10,2) },
    meta: { type: DataTypes.JSONB, defaultValue: {} }
  });
};
