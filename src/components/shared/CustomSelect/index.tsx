import { useState, useEffect } from 'react';

import OutsideClickHandler from 'react-outside-click-handler';

import { IOptionType } from 'commons/types';

import CustomOption from './CustomOption';

import * as misc from './misc';
import * as styled from './styled';

interface Props {
  width?: string;
  placeholder?: string;
  isDisabled?: boolean;
  options: IOptionType[];
  currentValue: string | number | null;
  onNewOptionSelected: (selectedOne: IOptionType) => void;
}

function CustomSelect(props: Props) {
  const [isDimmed, setIsDimmed] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const callNewOptionHandler = (option: IOptionType) => {
    props.onNewOptionSelected(option);
    setIsDimmed(false);
  };

  const trimmedValue = props.currentValue ? misc.trimText(`${props.currentValue}`, 32) : null;

  useEffect(() => {
    if (props.currentValue === null) {
      setIsDimmed(true);
    }
  }, [props.currentValue]);

  return (
    <OutsideClickHandler display='contents' onOutsideClick={() => setIsExpanded(false)}>
      <styled.SelectWrapper
        style={{ width: props.width }}
        isDisabled={props.isDisabled}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <styled.SelectedItemWrapper isDimmed={isDimmed} isDisabled={props.isDisabled}>
          {trimmedValue || props.placeholder || 'Выбрать'}
        </styled.SelectedItemWrapper>

        {isExpanded && (
        <styled.OptionsBadgesWrapper>
          {props.options.map(option => (
            <CustomSelect.Option
              key={option.key}
              optionData={option}
              onClick={() => callNewOptionHandler(option)}
            />
          ))}
        </styled.OptionsBadgesWrapper>
        )}

        {isExpanded ? <styled.ArrowUp /> : <styled.ArrowDown />}
      </styled.SelectWrapper>
    </OutsideClickHandler>
  );
}

CustomSelect.Option = CustomOption;

export default CustomSelect;
