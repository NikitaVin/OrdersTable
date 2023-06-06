import React, { FC, useContext } from 'react';
import { SVGIcon } from '../../assets/icons/constansIcon';
import AppContext from '../../context';
import { MyInputStyle, IconContainer, Word } from './Input.styles';

interface IInput {
  svgForInput?: string;
  svgClear?: string;
  size?: number;
  marginLeft?: number;
  marginRight?: number;
  iconColor?: string;
  isWord?: boolean;
  word?: string;
  isIconClear?: boolean;
  width?: number;
  height?: number;
  children?: JSX.Element | JSX.Element[];
  onClick?: () => void;
}

export const Input: FC<IInput> = ({
  svgForInput = '',
  svgClear = '',
  size,
  marginLeft,
  marginRight,
  iconColor,
  isWord,
  word = '',
  isIconClear,
  width,
  height,
  children,
  onClick,
}) => {
  const { isLightTheme } = useContext(AppContext);

  return (
    <MyInputStyle isLightTheme={isLightTheme} size={size}>
      {svgForInput === 'searchIcon' && (
        <IconContainer marginLeft={marginLeft} marginRight={marginRight}>
          <SVGIcon color={iconColor} icons={svgForInput} />
        </IconContainer>
      )}
      {isWord && <Word isLightTheme={isLightTheme}>{word}</Word>}
      {children}
      {isIconClear && (
        <IconContainer
          marginRight={marginRight}
          isPointer
          width={width}
          height={height}
          onClick={onClick}
        >
          <SVGIcon color={iconColor} icons={svgClear} />
        </IconContainer>
      )}
    </MyInputStyle>
  );
};
