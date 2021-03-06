module.exports = async (Robinhood, { instrument, quantity, price, symbol }) => {
  try {
    const options = {
      instrument: { url: instrument, symbol },
      quantity,
      stop_price: parseFloat(price).toFixed(2),
      type: "market",
      trigger: "stop"
    };
    console.log(options);
    const orderPlacedRes = await Robinhood.place_sell_order(options);

    return orderPlacedRes;
  } catch (e) {
    return { detail: e.toString() };
  }
};
