import React, { FC, useState } from 'react';
import { IconWrapper, TableCellWrap } from './TableCell.styles';
import { SVGIcon } from '../../../../assets/icons/constansIcon';
import { Text } from '../../../../App.styles';

interface ITableCell {
  title: string;
  color?: string;
  backGroundColor?: string;
  sort?: boolean;
  padding?: string;
  borderBottom?: string;
  isHead?: boolean;
  isClickSortDate?: boolean;
  isClickSortQuantity?: boolean;
  isClickSortPrice?: boolean;
  onClickSortByQuantityInc?: (i: boolean) => void;
  onClickSortByQuantityDec?: (i: boolean) => void;
  onClickSortByDateInc?: (i: boolean) => void;
  onClickSortByDateDec?: (i: boolean) => void;
  onClickSortByPriceInc?: (i: boolean) => void;
  onClickSortByPriceDec?: (i: boolean) => void;
  onClickSortTitle?: (i: string) => void;
  onClickOpenSortDate?: () => void;
  onClickOpenSortQuantity?: () => void;
  onClickOpenSortPrice?: () => void;
  width?: string;
}

export const TableCell: FC<ITableCell> = ({
  title,
  color = '',
  backGroundColor,
  sort,
  borderBottom,
  padding,
  isHead,
  isClickSortDate,
  isClickSortQuantity,
  isClickSortPrice,
  width,
  onClickSortByQuantityInc,
  onClickSortByQuantityDec,
  onClickSortByDateInc,
  onClickSortByDateDec,
  onClickSortByPriceInc,
  onClickSortByPriceDec,
  onClickSortTitle,
  onClickOpenSortDate,
  onClickOpenSortQuantity,
  onClickOpenSortPrice,
}) => {
  const [increment, setIncrement] = useState(true);
  const [incQuantity, setIncQuantity] = useState(true);
  const [incDate, setIncDate] = useState(true);
  const [incPrice, setIncPrice] = useState(true);

  const hendlerSortQuantity = () => {
    if (incQuantity) {
      onClickSortByPriceInc?.(false);
      onClickSortByPriceDec?.(false);
      onClickSortByDateInc?.(false);
      onClickSortByDateDec?.(false);
      onClickSortByQuantityDec?.(false);
      onClickSortByQuantityInc?.(true);
    }
    if (!incQuantity) {
      onClickSortByPriceInc?.(false);
      onClickSortByPriceDec?.(false);
      onClickSortByDateInc?.(false);
      onClickSortByDateDec?.(false);
      onClickSortByQuantityInc?.(false);
      onClickSortByQuantityDec?.(true);
    }
    onClickOpenSortQuantity?.();
    setIncQuantity(!incQuantity);
    setIncrement(!increment);
  };

  const hendlerSortDate = () => {
    if (incDate) {
      onClickSortByPriceInc?.(false);
      onClickSortByPriceDec?.(false);
      onClickSortByQuantityInc?.(false);
      onClickSortByQuantityDec?.(false);
      onClickSortByDateDec?.(false);
      onClickSortByDateInc?.(true);
    }
    if (!incDate) {
      onClickSortByPriceInc?.(false);
      onClickSortByPriceDec?.(false);
      onClickSortByQuantityInc?.(false);
      onClickSortByQuantityDec?.(false);
      onClickSortByDateInc?.(false);
      onClickSortByDateDec?.(true);
    }
    onClickOpenSortDate?.();
    setIncDate(!incDate);
    setIncrement(!increment);
  };

  const hendlerSortPrice = () => {
    if (incPrice) {
      onClickSortByDateInc?.(false);
      onClickSortByDateDec?.(false);
      onClickSortByQuantityInc?.(false);
      onClickSortByQuantityDec?.(false);
      onClickSortByPriceDec?.(false);
      onClickSortByPriceInc?.(true);
    }
    if (!incPrice) {
      onClickSortByDateInc?.(false);
      onClickSortByDateDec?.(false);
      onClickSortByQuantityInc?.(false);
      onClickSortByQuantityDec?.(false);
      onClickSortByPriceInc?.(false);
      onClickSortByPriceDec?.(true);
    }
    onClickOpenSortPrice?.();
    setIncPrice(!incPrice);
    setIncrement(!increment);
  };

  const handlerSortTitle = () => {
    onClickSortTitle?.(title);
  };

  return (
    <TableCellWrap
      isHead={isHead}
      color={color}
      borderBottom={borderBottom}
      padding={padding}
      backGroundColor={backGroundColor}
      width={width}
    >
      <Text>{title}</Text>
      {sort &&
        (!isClickSortDate && !isClickSortQuantity && !isClickSortPrice ? (
          <IconWrapper
            cursor="pointer"
            onClick={
              title === 'Дата'
                ? hendlerSortDate
                : title === 'Позиций'
                ? hendlerSortQuantity
                : hendlerSortPrice
            }
          >
            <SVGIcon icons="dotIcon" color={'white'} onClickSortTitle={handlerSortTitle} />
          </IconWrapper>
        ) : increment ? (
          <IconWrapper
            cursor="pointer"
            onClick={
              title === 'Дата'
                ? hendlerSortDate
                : title === 'Позиций'
                ? hendlerSortQuantity
                : hendlerSortPrice
            }
          >
            <SVGIcon icons="arrowIcon" color={'white'} onClickSortTitle={handlerSortTitle} />
          </IconWrapper>
        ) : (
          <IconWrapper
            cursor="pointer"
            onClick={
              title === 'Дата'
                ? hendlerSortDate
                : title === 'Позиций'
                ? hendlerSortQuantity
                : hendlerSortPrice
            }
            transform="rotate(180deg)"
          >
            <SVGIcon icons="arrowIcon" color={'white'} onClickSortTitle={handlerSortTitle} />
          </IconWrapper>
        ))}
    </TableCellWrap>
  );
};
