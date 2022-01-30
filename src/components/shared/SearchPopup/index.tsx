import { memo } from 'react';
import { connect } from 'react-redux';

import { apiClient } from 'commons/utils/services';
import {
  AppState,
  setColleagues,
  setPageLocked,
  setPageUnlocked,
  setIsSearchPopupVisible
} from 'store';
import CustomButton from 'components/shared/CustomButton';
import OptionBadge from './OptionBadge';

import * as types from './types';
import * as styled from '../Popups';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  privateToken: store.profile.privateToken
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

const TitleWrapper = (
  <styled.BodyWrapper>
    <styled.Title>Вы можете получить отзыв о кандидате двумя способами:</styled.Title>
  </styled.BodyWrapper>
);

function SearchPopup(props: types.IProps) {
  function onWriteReviewClickHandler() {
    props.lockPage();

    apiClient.getColleagues(props.privateToken as string)
      .then(colleaguesData => props.setColleagues(colleaguesData.data))
      .finally(() => props.unlockPage());

    props.onClose();
    props.setIsVisible(false);
  }

  const TopWrapper = (
    <styled.TopWrapper>
      <styled.AdaptedCloseCross onClick={() => props.setIsVisible(false)} />
    </styled.TopWrapper>
  );

  const BuySection = (
    <styled.OptionGroupWrapper>
      <OptionBadge
        mainView={BuyMainBadge}
        hiddenView={BuyHiddenBadge}
      />
      <styled.ButtonWrapper>
        <CustomButton isDisabled={false}>Купить отзыв</CustomButton>
      </styled.ButtonWrapper>
    </styled.OptionGroupWrapper>
  );

  const WriteReviewSection = (
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
  );

  return (
    <styled.Popup>
      <styled.Frame>
        {TopWrapper}
        {TitleWrapper}

        <styled.OptionsWrapper>
          {BuySection}
          {WriteReviewSection}
        </styled.OptionsWrapper>

      </styled.Frame>
      <styled.ClickableBackground onClick={() => props.setIsVisible(false)} />
    </styled.Popup>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(SearchPopup));
