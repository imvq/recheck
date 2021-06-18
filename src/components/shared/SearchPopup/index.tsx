import { connect } from 'react-redux';

import { setIsSearchPopupVisible } from 'store';
import CustomButton from 'components/shared/CustomButton';
import OptionBadge from './OptionBadge';

import * as types from './types';
import * as styled from './styled';

const mapDispatchToProps: types.IDispatchProps = {
  setIsVisible: setIsSearchPopupVisible
};

const BuyMainBadge = (
  <>
    <styled.BadgeTitleWrapper>
      <styled.BadgeTitle>Оплатить получение отзыва</styled.BadgeTitle>
    </styled.BadgeTitleWrapper>
    <styled.BadgeText>$19.89</styled.BadgeText>
  </>
);

const BuyHiddenBadge = (
  <>
    <styled.BadgeTitleWrapper>
      <styled.BadgeTitle>Оплатить получение отзыва</styled.BadgeTitle>
    </styled.BadgeTitleWrapper>

    <styled.BuyHiddenBadgeWrapper>
      <styled.BadgeText isEnlarged>$19.89</styled.BadgeText>
      <styled.BadgeText>
        При оплате вы получите возможность просматривать отзывы о выбраном кандидате
        с прошлых мест работы.
      </styled.BadgeText>
    </styled.BuyHiddenBadgeWrapper>
  </>
);

const FreeMainBadge = (
  <>
    <styled.BadgeTitleWrapper>
      <styled.BadgeTitle>Бесплатно</styled.BadgeTitle>
    </styled.BadgeTitleWrapper>
    <styled.BadgeText>Написать отзыв о ком-то из своей команды</styled.BadgeText>
  </>
);

const FreeHiddenBadge = (
  <>
    <styled.BadgeTitleWrapper>
      <styled.BadgeTitle>Бесплатно</styled.BadgeTitle>
    </styled.BadgeTitleWrapper>

    <styled.BuyHiddenBadgeWrapper>
      <styled.BadgeText>
        Вы можете оставить отзыв
        об одном из своих  подчиненных либо коллег, с которыми хорошо знакомы и взамен увидеть отзыв
        о выбраном кандидате бесплатно.
      </styled.BadgeText>
    </styled.BuyHiddenBadgeWrapper>
  </>
);

const SearchPopup = (props: types.IProps) => (
  <styled.Wrapper>
    <styled.Frame>
      <styled.TopWrapper>
        <styled.AdaptedCloseCross onClick={() => props.setIsVisible(false)} />
      </styled.TopWrapper>

      <styled.BodyWrapper>
        <styled.Title>Вы можете получить отзыв о кандидате двумя способами:</styled.Title>
      </styled.BodyWrapper>

      <styled.OptionsWrapper>
        <styled.OptionGroupWrapper>
          <OptionBadge
            mainView={BuyMainBadge}
            hiddenView={BuyHiddenBadge}
          />
          <styled.ButtonWrapper>
            <CustomButton isDisabled={false}>Купить отзыв</CustomButton>
          </styled.ButtonWrapper>
        </styled.OptionGroupWrapper>

        <styled.OptionGroupWrapper>
          <OptionBadge
            mainView={FreeMainBadge}
            hiddenView={FreeHiddenBadge}
          />
          <styled.ButtonWrapper>
            <CustomButton isDisabled={false}>Оставить отзыв</CustomButton>
          </styled.ButtonWrapper>
        </styled.OptionGroupWrapper>
      </styled.OptionsWrapper>
    </styled.Frame>
    <styled.ClickableBackground onClick={() => props.setIsVisible(false)} />
  </styled.Wrapper>
);

export default connect(null, mapDispatchToProps)(SearchPopup);
