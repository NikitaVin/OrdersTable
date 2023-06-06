const mongoose = require('mongoose');

const OrdersInfoSchema = new mongoose.Schema({
  id: Number,
  name: String,
  status: String,
  date: String,
  products: [
   {
      name: String,
      price: String
   }
] 
});

module.exports = mongoose.model("OrdersInfo", OrdersInfoSchema);