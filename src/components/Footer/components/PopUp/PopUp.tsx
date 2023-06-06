import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorChangeInfo } from '../../../../redux/slices/changeInfo';
import { Button } from '../../../Button/Button';
import { OrderTitle } from '../../../Order/Order.styles';
import { Wrapper } from './PopUp.styles';
import axios from '../../../../axios';
import { selectorSort, setSortBool } from '../../../../redux/slices/sort';
import { Text } from '../../../../App.styles';

interface IPopUp {
  onClickTrash: () => void;
}

export const PopUp: FC<IPopUp> = ({ onClickTrash }) => {
  const { orderInfo } = useSelector(selectorChangeInfo);
  const { sortBool } = useSelector(selectorSort);
  const dispatch = useDispatch();

  const deleteOrder = async () => {
    if (orderInfo[0]) {
      await axios.delete(`/orders/${orderInfo[0].id}`);
      dispatch(setSortBool(!sortBool));
      onClickTrash();
    }
  };

  return (
    <Wrapper>
      <OrderTitle fontSize="13" fontWeight="400" margin="0px 0px 10px 0px">
        {<Text>Удалить {orderInfo[0].id}-ю запись?</Text>}
      </OrderTitle>
      <Button onClick={deleteOrder} color="Transparent" text="Удалить" margin="0 0 5px 0" />
      <Button onClick={onClickTrash} color="blue" text="Отмена" />
    </Wrapper>
  );
};
