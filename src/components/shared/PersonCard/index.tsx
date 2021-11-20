import { memo } from 'react';

import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from './styled';

function PersonCard(props: types.IProps) {
  return (
    <styled.Wrapper>
      <styled.TopBar />
      <styled.BodyWrapper>
        <styled.PhotoWrapper src={props.userData.photoUrl || ''} />
        <styled.Span isEnlarged>{props.userData.fullName}</styled.Span>
        <styled.Span isDimmed>
          {`${props.userData.currentPosition} - ${props.userData.currentCompanyName}`}
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
  );
}

export default memo(PersonCard);
