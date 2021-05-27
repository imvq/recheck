import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import { trimText } from 'utils/functions';
import * as utilityTypes from 'utils/typing/utility';
import * as generalTypes from 'utils/typing/general';
import { IProps } from './types';
import CustomOption from './CustomOption';
import { Wrapper, SelectedItemWrapper, ArrowUp, ArrowDown, OptionsBadgesWrapper } from './styled';

type TCurrentValue = utilityTypes.Nullable<generalTypes.OptionType>;

const CustomSelect = (props: IProps) => {
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
      <Wrapper style={{ width: props.width }} onClick={() => setIsExpanded(!isExpanded)}>
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
