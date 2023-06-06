const totalPrice = (products) => {
  return products.reduce((acc, product) => {
    return acc + Number(product.price);
  }, 0);
};

const filtredPaginatedOrders = (filtredOrders) => {
  if (filtredOrders.length <= 5) {
    return filtredOrders;
  }
  const indexOfLastOrder = page * limit;
  const indexOfFirstOrder = indexOfLastOrder - limit;
  const currentOrders = filtredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  return currentOrders;
};

const sortingFoo = (ordersForSort) => {
  return ordersForSort.sort((a, b) => {
    if (sort.sortByDateInc) {
      return new Date(a.date) - new Date(b.date);
    }
    if (sort.sortByPriceInc) {
      return totalPrice(a.products) - totalPrice(b.products);
    }
    if (sort.sortByQuantityInc) {
      return a.products.length - b.products.length;
    }
    if (sort.sortByDateDec) {
      return new Date(b.date) - new Date(a.date);
    }
    if (sort.sortByPriceDec) {
      return totalPrice(b.products) - totalPrice(a.products);
    }
    if (sort.sortByQuantityDec) {
      return b.products.length - a.products.length;
    }
  });
};

module.exports = { totalPrice, filtredPaginatedOrders, sortingFoo };
