const OrdersModel = require('../models/ordersInfo');

const totalPrice = (products) => {
  return products.reduce((acc, product) => {
    return acc + Number(product.price);
  }, 0);
};

const getFullOrders = async (req, res) => {
  try {
    const {
      body: { filters = {} },
    } = req;
    const orders = await OrdersModel.find().exec();

    const { startDate, endDate, startPrice, endPrice, filteredStatus, searchValue } = filters;

    let items = orders;
    if (startDate) {
      items = items.filter((i) => new Date(i.date) >= new Date(startDate));
    }
    if (endDate) {
      items = items.filter((i) => new Date(i.date) <= new Date(endDate));
    }
    if (startPrice) {
      items = items.filter((i) => totalPrice(i.products) >= Number(startPrice));
    }
    if (endPrice) {
      items = items.filter((i) => totalPrice(i.products) <= Number(endPrice));
    }

    if (filteredStatus) {
      items = items.filter((i) => i.status === filteredStatus);
    }
    if (searchValue) {
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(searchValue.toLowerCase()) || i.id === Number(searchValue)
      );
    }
    return res.status(201).json(items);
  } catch (error) {
    console.log(error);
  }
};

const GetOrdersByParams = async (req, res) => {
  try {
    const {
      body: { filters = {} },
    } = req;
    const orders = await OrdersModel.find().exec();

    const {
      startDate,
      endDate,
      startPrice,
      endPrice,
      filteredStatus,
      page,
      limit,
      searchValue,
      sort,
    } = filters;

    if (!page) page = 1;
    if (!limit) limit = 5;

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

    let sortItems = orders;
    if (filteredStatus) {
      sortItems = sortItems.filter((i) => i.status === filteredStatus);
    }
    if (startDate) {
      sortItems = sortItems.filter((i) => new Date(i.date) >= new Date(startDate));
    }
    if (endDate) {
      sortItems = sortItems.filter((i) => new Date(i.date) <= new Date(endDate));
    }
    if (startPrice) {
      sortItems = sortItems.filter((i) => totalPrice(i.products) >= Number(startPrice));
    }
    if (endPrice) {
      sortItems = sortItems.filter((i) => totalPrice(i.products) <= Number(endPrice));
    }
    if (searchValue) {
      sortItems = sortItems.filter(
        (i) =>
          i.name.toLowerCase().includes(searchValue.toLowerCase()) || i.id === Number(searchValue)
      );
    }
    return res.json(filtredPaginatedOrders(sort ? sortingFoo(sortItems) : sortItems));
  } catch (error) {
    console.log(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const orderId = req.params.id;
    await OrdersModel.deleteOne({
      id: orderId,
    });
    res.json({
      success: true,
    });
  } catch (error) {
    res.status(501).json({
      message: 'Не удалось удалить заказ',
    });
  }
};

const update = async (req, res) => {
  try {
    const orderId = req.params.id;

    await OrdersModel.updateOne(
      {
        id: orderId,
      },
      {
        date: req.body.date,
        name: req.body.name,
        price: req.body.price,
        status: req.body.status,
      }
    );

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Не удалось обновить данные',
    });
  }
};

module.exports = { getFullOrders, GetOrdersByParams, update, deleteOne };
