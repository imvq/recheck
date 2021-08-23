import { memo } from 'react';
import { connect } from 'react-redux';

import Api from 'utils/api';
import {
  AppState,
  setColleagues,
  setPageLocked,
  setPageUnlocked,
  setIsSearchPopupVisible
} from 'store';
import CustomButton from 'components/shared/CustomButton';
import * as constants from 'utils/constants';
import OptionBadge from './OptionBadge';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked,
  unlockPage: setPageUnlocked,
  setColleagues,
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

const SearchPopup = (props: types.IProps) => {
  const onBuyReviewClickHandler = () => {
    window.location.href = constants.WAYFORPAY_LINK_BUTTON;
    props.onClose();
    props.setIsVisible(false);
  };

  const onWriteReviewClickHandler = () => {
    Api.getColleagues(props.currentProfileInfo.currentId)
      .then(colleaguesData => props.setColleagues(colleaguesData.data.results))
      .finally(() => props.unlockPage());

    props.onClose();
    props.setIsVisible(false);
  };

  return (
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
              <CustomButton
                isDisabled={false}
                onClick={onBuyReviewClickHandler}
              >
                Купить отзыв
              </CustomButton>
            </styled.ButtonWrapper>
          </styled.OptionGroupWrapper>

          <styled.OptionGroupWrapper>
            <OptionBadge
              mainView={FreeMainBadge}
              hiddenView={FreeHiddenBadge}
            />
            <styled.ButtonWrapper>
              <CustomButton
                isDisabled={false}
                onClick={onWriteReviewClickHandler}
              >
                Оставить отзыв
              </CustomButton>
            </styled.ButtonWrapper>
          </styled.OptionGroupWrapper>
        </styled.OptionsWrapper>
      </styled.Frame>
      <styled.ClickableBackground onClick={() => props.setIsVisible(false)} />
    </styled.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SearchPopup));
