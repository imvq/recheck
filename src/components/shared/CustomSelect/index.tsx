import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { trimText } from 'utils/functions';
import { Nullable, OptionType } from 'utils/types.common';
import { IProps } from './types';
import CustomOption from './CustomOption';
import {
  Wrapper, SelectedItemWrapper, ArrowUp, ArrowDown, OptionsBadgesWrapper
} from './styled';

const CustomSelect = (props: IProps) => {
  const [isDimmed, setIsDimmed] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentValue, setCurrentValue] = useState<Nullable<OptionType>>(null);

  const callNewOptionHandler = (option: OptionType) => {
    props.onNewOptionSelected(option);
    setCurrentValue(option);
    setIsDimmed(false);
  };

  const trimmedValue = currentValue ? trimText(currentValue.text, 32) : null;

  return (
    <OutsideClickHandler onOutsideClick={() => setIsExpanded(false)}>
      <Wrapper onClick={() => setIsExpanded(!isExpanded)}>
        <SelectedItemWrapper isDimmed={isDimmed}>
          {trimmedValue || props.placeholder || 'Выбрать'}
        </SelectedItemWrapper>
        {isExpanded && (
        <OptionsBadgesWrapper>
          {props.options.map(option => (
            <CustomSelect.Option
              key={option.key}
              optionData={option}
              onClick={() => callNewOptionHandler(option)}
            />
          ))}
        </OptionsBadgesWrapper>
        )}
        {isExpanded ? <ArrowUp /> : <ArrowDown />}
      </Wrapper>
    </OutsideClickHandler>
  );
};

CustomSelect.Option = CustomOption;

export default CustomSelect;
