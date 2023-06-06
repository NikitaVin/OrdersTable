import axios from '../../axios';
import React, { FC, useContext, useState } from 'react';

import { SVGIcon } from '../../assets/icons/constansIcon';
import AppContext from '../../context';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { IconContainer, InputArea } from '../Input/Input.styles';
import { OrderItems } from './Components/OrderItems/OrderItems';
import {
  FooterOrder,
  HeaderOrder,
  InfoOrder,
  OrderTitle,
  Overlay,
  WrapperOrder,
} from './Order.styles';
import { selectorSort, setSortBool } from '../../redux/slices/sort';
import { useDispatch, useSelector } from 'react-redux';
import { DropDownInput } from '../DropDown/InputDropDown';
import { IProducts } from '../../redux/slices/changeInfo';
import { formatToDate } from '../../utils/formatToDate';

interface IOrder {
  onClickCloseChangeStatus: () => void;
  id: string;
  name: string;
  status: string;
  date: string;
  price?: string;
  products?: IProducts[];
}

export const Order: FC<IOrder> = ({
  onClickCloseChangeStatus,
  id,
  date,
  name,
  status,
  price,
  products,
}) => {
  const { isLightTheme } = useContext(AppContext);
  const [newDate, setNewDate] = useState(date);
  const [newName, setNewName] = useState(name);
  const [newStatus, setNewStatus] = useState(status);
  const { sortBool } = useSelector(selectorSort);
  const dispatch = useDispatch();

  const onClickNewStatus = (text: string) => {
    setNewStatus(text);
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    let dateMask = '';
    if (dateValue) {
      dateMask = !dateValue[2]
        ? dateValue[1]
        : `${dateValue[1]}.${dateValue[2]}${`${dateValue[3] ? `.${dateValue[3]}` : ''}`}`;
    }
    setNewDate(dateMask);
  };

  const onUpdate = async () => {
    try {
      const fields = {
        date: formatToDate(newDate || ''),
        name: newName,
        status: newStatus,
        price,
      };

      await axios.patch(`/orders/${id}`, fields);
      dispatch(setSortBool(!sortBool));
    } catch (error) {
      console.warn(error);
      alert('Не удалось обновить данные');
    }
  };

  return (
    <Overlay>
      <WrapperOrder>
        <HeaderOrder>
          <OrderTitle>{id}</OrderTitle>
          <IconContainer
            marginRight={16}
            isPointer
            width={23}
            height={23}
            onClick={onClickCloseChangeStatus}
          >
            <SVGIcon color="white" icons="x-large" />
          </IconContainer>
        </HeaderOrder>
        <InfoOrder>
          <OrderTitle fontSize="13" fontWeight="400" margin="0px 0px 8px 0px">
            Дата и время заказа
          </OrderTitle>
          <Input marginRight={8} isIconClear svgClear="x-large">
            <InputArea
              type="text"
              defaultValue={newDate}
              onChange={(e) => handleChangeDate(e)}
              placeholder="dd.mm.yyyy"
              padding="8px 8px"
              disabled
            />
          </Input>
          <OrderTitle fontSize="13" fontWeight="400" margin="32px 0px 8px 0px">
            ФИО покупателя
          </OrderTitle>
          <Input marginRight={8} isIconClear svgClear="x-large">
            <InputArea
              type="text"
              defaultValue={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="ФИО"
              padding="8px 8px"
              disabled
            />
          </Input>
          <OrderItems price={price} products={products} />
          <OrderTitle fontSize="13" fontWeight="400" margin="0px 0px 8px 0px">
            Уровень лояльности
          </OrderTitle>
          <Input marginRight={8} isIconClear svgClear="x-large">
            <InputArea type="text" padding="8px 8px" disabled />
          </Input>
          <OrderTitle fontSize="13" fontWeight="400" margin="32px 0px 8px 0px">
            Статус заказа
          </OrderTitle>
          <Input marginRight={8} isIconClear svgClear="x-large">
            <DropDownInput newStatus={newStatus} onClick={onClickNewStatus} isOrderChange />
          </Input>
          <OrderTitle fontSize="13" fontWeight="400" margin="32px 0px 8px 0px">
            Код подтверждения
          </OrderTitle>
          <Input marginRight={8} isIconClear svgClear="x-large">
            <InputArea type="text" placeholder="Введите код" padding="8px 8px" disabled />
          </Input>
        </InfoOrder>
        <FooterOrder isLightTheme={isLightTheme}>
          <Button
            iconForButton="saveIcon"
            color="blue"
            text="Сохранить"
            colorIcon="white"
            onClick={onUpdate}
          />
        </FooterOrder>
      </WrapperOrder>
    </Overlay>
  );
};
