import React, { FC } from 'react';
import { CheckBoxArea, CheckBoxFlex, Label } from './CheckBox.styles';
import { Text } from '../../App.styles';

interface ICheckBox {
  text: string;
  checked?: () => void;
  onClick: (text: string) => void;
}

export const CheckBox: FC<ICheckBox> = ({ text, checked, onClick }) => {
  return (
    <CheckBoxFlex tabIndex={0}>
      <CheckBoxArea onClick={() => onClick(text)} onChange={checked} type="checkbox" id={text} />
      <Label htmlFor={text}>
        <Text>{text}</Text>
      </Label>
    </CheckBoxFlex>
  );
};
