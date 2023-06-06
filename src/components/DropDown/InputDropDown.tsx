import React, { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SVGIcon } from '../../assets/icons/constansIcon';
import { selectorSort, setSort, setClear } from '../../redux/slices/sort';
import { colors } from '../../styles/colors';
import { IconContainerDropDown, InputArea, InputDropDown } from '../Input/Input.styles';
import { DropDown } from './DropDown';

interface IDropDownInput {
  newStatus?: string;
  onClick?: (text: string) => void;
  isOrderChange?: boolean;
}

export const DropDownInput: FC<IDropDownInput> = ({ newStatus, onClick, isOrderChange }) => {
  const dropDownTextArray = ['Новый', 'Расчет', 'Подтвержден', 'Отложен', 'Выполнен', 'Отменен'];

  const dispatch = useDispatch();
  const [dropDown, setIsIconArray] = useState(false);
  const onClickIconArrow = () => {
    setIsIconArray(!dropDown);
  };
  const onClickX = () => {
    dispatch(setClear());
  };
  const { status } = useSelector(selectorSort);

  const onClickStatus = (text: string) => {
    dispatch(setSort(text));
  };

  return (
    <div>
      <InputDropDown>
        <IconContainerDropDown onClick={status ? onClickX : onClickIconArrow}>
          <SVGIcon color={colors.blue} icons={status ? 'x-medium' : 'arrowIcon'} />
        </IconContainerDropDown>
        <InputArea value={newStatus || status} padding={'8px 4px 8px 8px'} />
        {dropDown && (
          <DropDown
            onClickIconArrow={onClickIconArrow}
            onClick={isOrderChange ? (text) => onClick?.(text) : (text) => onClickStatus(text)}
            dropDownTextArray={dropDownTextArray}
          />
        )}
      </InputDropDown>
    </div>
  );
};
