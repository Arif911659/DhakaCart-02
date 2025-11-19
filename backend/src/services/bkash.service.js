// Simulated bkash provider
module.exports = {
  initPayment: async ({amount, orderId}) => {
    // return simulated checkout URL and paymentId
    return { paymentId: 'bk_'+orderId.slice(0,8), checkoutUrl: `https://fake-bkash.local/pay/${orderId}` };
  },
  verifyPayment: async (paymentId) => {
    // randomly succeed for demo (or accept query)
    return { status: 'completed', providerRef: paymentId, completedAt: new Date() };
  }
};
