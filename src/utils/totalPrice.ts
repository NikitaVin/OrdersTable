import { IProducts } from '../redux/slices/changeInfo';

export const totalPrice = (products: IProducts[]) => {
  return products.reduce((acc, product) => {
    return acc + Number(product.price);
  }, 0);
};
