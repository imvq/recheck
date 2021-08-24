import { memo } from 'react';

import CustomButton from 'components/shared/CustomButton';

import * as styled from '../Popups/styled';

const TitleWrapper = (
  <styled.BodyWrapper>
    <styled.Title>У вас есть непотраченные просмотры:</styled.Title>
  </styled.BodyWrapper>
);

function SpendFreeViewsPopup() {
  const TopWrapper = (
    <styled.TopWrapper>
      <styled.AdaptedCloseCross onClick={() => { /* TODO: setIsVisible */ }} />
    </styled.TopWrapper>
  );

  const SpendSection = (
    <styled.OptionGroupWrapper>
      <styled.ButtonWrapper>
        <CustomButton isDisabled={false}>Потратить сейчас</CustomButton>
      </styled.ButtonWrapper>
    </styled.OptionGroupWrapper>
  );

  const DiscardSection = (
    <styled.OptionGroupWrapper>
      <styled.ButtonWrapper>
        <CustomButton isDisabled={false}>Посмотреть другие опции</CustomButton>
      </styled.ButtonWrapper>
    </styled.OptionGroupWrapper>
  );

  return (
    <styled.Wrapper>
      <styled.Frame>
        {TopWrapper}
        {TitleWrapper}

        <styled.OptionsWrapper>
          {SpendSection}
          {DiscardSection}
        </styled.OptionsWrapper>
      </styled.Frame>

      <styled.ClickableBackground onClick={() => {}} />
    </styled.Wrapper>
  );
}

export default memo(SpendFreeViewsPopup);
