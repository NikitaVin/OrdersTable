import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SVGIcon } from '../../assets/icons/constansIcon';
import { selectorSort, setSortBool } from '../../redux/slices/sort';
import { colors } from '../../styles/colors';
import { IconContainer } from '../Input/Input.styles';
import { ButtonSpan, ButtonStyle } from './Button.styles';
import { ButtonText } from '../../App.styles';

interface IButton {
  text?: String;
  iconForButton?: string;
  color?: string;
  colorIcon?: string;
  margin?: string;
  padding?: string;
  disabled?: boolean;
  sort?: boolean;
  onClick?: () => void;
}

export const Button: FC<IButton> = ({
  margin,
  padding,
  text = '',
  iconForButton = '',
  color = 'blue',
  colorIcon = 'blue',
  disabled,
  sort,
  onClick,
}) => {
  const dispatch = useDispatch();
  const { sortBool } = useSelector(selectorSort);
  const onClickSortBool = () => {
    dispatch(setSortBool(!sortBool));
    onClick?.();
  };
  let backgroundColor = '';
  let fontColor = '';
  switch (color) {
    case 'blue':
      backgroundColor = colors.blue;
      fontColor = colors.white;
      break;
    case 'red':
      backgroundColor = colors.red;
      fontColor = colors.white;
      break;
    case 'Transparent':
      backgroundColor = 'Transparent';
      fontColor = '#459DF5';
      break;
    case 'purple':
      backgroundColor = '#8055FF';
      fontColor = '#A8A8FF';
  }
  return (
    <>
      <ButtonStyle
        onClick={sort ? onClickSortBool : onClick}
        color={backgroundColor}
        margin={margin}
        padding={padding}
        disabled={disabled}
        iconForButton={iconForButton}
      >
        {(iconForButton || colorIcon) && (
          <IconContainer>
            <SVGIcon icons={iconForButton} color={colorIcon} />
          </IconContainer>
        )}
        <ButtonSpan color={fontColor}>
          <ButtonText>{text}</ButtonText>
        </ButtonSpan>
      </ButtonStyle>
    </>
  );
};
