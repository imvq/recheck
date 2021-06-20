import OutsideClickHandler from 'react-outside-click-handler';

import ExtendedOption from './ExtendedOption';

import * as types from './types';
import * as styled from './styled';

const CompanyBadges = (props: types.IProps) => (
  <OutsideClickHandler display='contents' onOutsideClick={props.onClose}>
    <styled.Wrapper>
      <styled.Content>
        {props.options.map(option => (
          <CompanyBadges.Option
            key={option.key}
            optionData={option}
            onClick={() => props.onOptionSelected(option)}
          />
        ))}
      </styled.Content>
    </styled.Wrapper>
  </OutsideClickHandler>
);

CompanyBadges.Option = ExtendedOption;

export default CompanyBadges;
