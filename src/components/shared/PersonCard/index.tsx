import { memo } from 'react';

import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from './styled';

export default memo((props: types.IProps) => (
  <styled.Wrapper>
    <styled.TopBar />
    <styled.BodyWrapper>
      <styled.PhotoWrapper src={props.userData.photoUrl || ''} />
      <styled.Span isEnlarged>{props.userData.name}</styled.Span>
      <styled.Span isDimmed>
        {`
        ${props.userData.position}
        ${props.userData.company ? `- ${props.userData.company}` : ''}
        `}
      </styled.Span>
      <styled.ButtonWrapper>
        <CustomButton
          isDisabled={false}
          isHollow
          height='2.2rem'
          color='#33c7ba'
          onClick={props.onButtonClick}
        >
          {props.buttonText}
        </CustomButton>
      </styled.ButtonWrapper>
    </styled.BodyWrapper>
  </styled.Wrapper>
));
