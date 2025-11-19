const bkash = require('../services/bkash.service');
const { Payment, Order } = require('../models');

const startPayment = async (req,res) => {
  const { orderId, provider } = req.body;
  const order = await Order.findByPk(orderId);
  if(!order) return res.status(404).json({message:'no order'});
  let resp;
  if(provider === 'bkash') resp = await bkash.initPayment({ amount: order.total, orderId });
  else if(provider === 'card') resp = { paymentId: 'card_'+orderId.slice(0,8), checkoutUrl: 'https://fake-card/local' };
  else if(provider === 'cod') resp = { paymentId: 'cod_'+orderId.slice(0,8), status: 'completed' };

  const p = await Payment.create({ orderId, provider, status: resp.status || 'initiated', amount: order.total, meta: resp });
  res.json({ payment: p, checkout: resp.checkoutUrl || null });
};

const confirmPayment = async (req,res) => {
  const { paymentId } = req.body;
  // find Payment and mark completed
  const payment = await Payment.findOne({ where: { id: paymentId }});
  // For demo, flip to completed
  if(payment) {
    payment.status = 'completed';
    await payment.save();
    // update order
    const order = await Order.findByPk(payment.orderId);
    order.status = 'paid';
    await order.save();
  }
  res.json({ ok: true });
};

module.exports = { startPayment, confirmPayment };
