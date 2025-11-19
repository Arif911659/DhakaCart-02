const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres' });

const User = require('./user.model')(sequelize);
const Product = require('./product.model')(sequelize);
const Order = require('./order.model')(sequelize);
const Payment = require('./payment.model')(sequelize);

// Associations
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Order, { foreignKey: 'productId' });
Order.belongsTo(Product, { foreignKey: 'productId' });

module.exports = {
  sequelize,
  Sequelize,
  User, Product, Order, Payment
};
