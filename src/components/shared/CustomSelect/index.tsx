import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { trimText } from 'utils/functions';
import * as generalTypes from 'utils/typing/general';
import CustomOption from './CustomOption';

import * as types from './types';
import * as styled from './styled';

type TCurrentValue = generalTypes.OptionType | null;

const CustomSelect = (props: types.IProps) => {
  const [isDimmed, setIsDimmed] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentValue, setCurrentValue] = useState<TCurrentValue>(null);

  const callNewOptionHandler = (option: generalTypes.OptionType) => {
    props.onNewOptionSelected(option);
    setCurrentValue(option);
    setIsDimmed(false);
  };

  const trimmedValue = currentValue ? trimText(currentValue.text, 32) : null;

  return (
    <OutsideClickHandler display='contents' onOutsideClick={() => setIsExpanded(false)}>
      <styled.Wrapper style={{ width: props.width }} onClick={() => setIsExpanded(!isExpanded)}>
        <styled.SelectedItemWrapper isDimmed={isDimmed}>
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
      </styled.Wrapper>
    </OutsideClickHandler>
  );
};

CustomSelect.Option = CustomOption;

export default CustomSelect;
