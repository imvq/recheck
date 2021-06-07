import { connect } from 'react-redux';

import { setIsSearchPopupVisible } from 'store';
import CustomButton from 'components/shared/CustomButton';
import OptionBadge from './OptionBadge';
import {
  Wrapper, TopWrapper, BodyWrapper, AdaptedCloseCross, Frame,
  ClickableBackground, Title, OptionsWrapper, OptionGroupWrapper,
  BuyHiddenBadgeWrapper, BadgeTitleWrapper, BadgeTitle, BadgeText,
  ButtonWrapper
} from './styled';
import { IProps, IDispatchProps } from './types';

const mapDispatchToProps: IDispatchProps = {
  setIsVisible: setIsSearchPopupVisible
};

const BuyMainBadge = (
  <>
    <BadgeTitleWrapper>
      <BadgeTitle>Оплатить получение отзыва</BadgeTitle>
    </BadgeTitleWrapper>
    <BadgeText>$19.89</BadgeText>
  </>
);

const BuyHiddenBadge = (
  <>
    <BadgeTitleWrapper>
      <BadgeTitle>Оплатить получение отзыва</BadgeTitle>
    </BadgeTitleWrapper>

    <BuyHiddenBadgeWrapper>
      <BadgeText isEnlarged>$19.89</BadgeText>
      <BadgeText>
        При оплате вы получите возможность просматривать отзывы о выбраном кандидате
        с прошлых мест работы.
      </BadgeText>
    </BuyHiddenBadgeWrapper>
  </>
);

const FreeMainBadge = (
  <>
    <BadgeTitleWrapper>
      <BadgeTitle>Бесплатно</BadgeTitle>
    </BadgeTitleWrapper>
    <BadgeText>Написать отзыв о ком-то из своей команды</BadgeText>
  </>
);

const FreeHiddenBadge = (
  <>
    <BadgeTitleWrapper>
      <BadgeTitle>Бесплатно</BadgeTitle>
    </BadgeTitleWrapper>

    <BuyHiddenBadgeWrapper>
      <BadgeText>
        Вы можете оставить отзыв
        об одном из своих  подчиненных либо коллег, с которыми хорошо знакомы и взамен увидеть отзыв
        о выбраном кандидате бесплатно.
      </BadgeText>
    </BuyHiddenBadgeWrapper>
  </>
);

const SearchPopup = (props: IProps) => (
  <Wrapper>
    <Frame>
      <TopWrapper>
        <AdaptedCloseCross onClick={() => props.setIsVisible(false)} />
      </TopWrapper>

      <BodyWrapper>
        <Title>Вы можете получить отзыв о кандидате двумя способами:</Title>
      </BodyWrapper>

      <OptionsWrapper>
        <OptionGroupWrapper>
          <OptionBadge
            mainView={BuyMainBadge}
            hiddenView={BuyHiddenBadge}
          />
          <ButtonWrapper>
            <CustomButton isDisabled={false}>Купить отзыв</CustomButton>
          </ButtonWrapper>
        </OptionGroupWrapper>
        <OptionGroupWrapper>
          <OptionBadge
            mainView={FreeMainBadge}
            hiddenView={FreeHiddenBadge}
          />
          <ButtonWrapper>
            <CustomButton isDisabled={false}>Оставить отзыв</CustomButton>
          </ButtonWrapper>
        </OptionGroupWrapper>
      </OptionsWrapper>
    </Frame>
    <ClickableBackground onClick={() => props.setIsVisible(false)} />
  </Wrapper>
);

export default connect(null, mapDispatchToProps)(SearchPopup);
