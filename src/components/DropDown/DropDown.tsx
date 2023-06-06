import React, { FC, useState } from 'react';
import { CheckBox } from '../CheckBox/CheckBox';
import { Wrapper } from './DropDowns.styles';

interface IDropDown {
  dropDownTextArray: string[];
  onClick: (text: string) => void;
  onClickIconArrow: () => void;
}

export const DropDown: FC<IDropDown> = ({ dropDownTextArray, onClick, onClickIconArrow }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onClickChekBox = () => {
    setIsChecked(!isChecked);
    onClickIconArrow();
  };

  return (
    <Wrapper>
      {dropDownTextArray.map((text) => (
        <CheckBox
          checked={() => onClickChekBox()}
          onClick={() => onClick(text)}
          key={text}
          text={text}
        />
      ))}
    </Wrapper>
  );
};
