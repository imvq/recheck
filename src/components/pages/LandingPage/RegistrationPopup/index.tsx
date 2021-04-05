import { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';

import { ReactComponent as RocketLoader } from 'assets/images/common/RocketLoader.svg';

import { setPageLocked } from 'store';
import { cookieManager, cookiesList } from 'utils/cookies';
import DimmingPopupWrapper from 'components/shared/DimmingPopupWrapper';
import { IProps, IDispatchProps } from './types';
import {
  Frame, TitleWrapper, Title, DescriptionWrapper, Description, Input,
  ButtonsWrapper, LogoutButton, ProceedButton
} from './styled';

const mapDispatchToProps: IDispatchProps = {
  lockPage: setPageLocked
};

const RegistrationPopup: FunctionComponent<IProps> = (props) => {
  const [isInProgress, setIsInProgress] = useState(false);

  const defaultView = (
    <>
      <TitleWrapper><Title>Привязка профиля</Title></TitleWrapper>
      <DescriptionWrapper>
        <Description>
          Введите ссылку на ваш публичный профиль в LinkedIn.
          Ссылка необходима для проверок, выполняемых при составлении
          отзывов.
        </Description>
      </DescriptionWrapper>
      <Input type='text' placeholder='Ссылка на LinkedIn*' />
      <DescriptionWrapper>
        <Description isReduced>
          Введите ссылку на ваш публичный профиль в LinkedIn.
          Ссылка необходима для проверок, выполняемых при составлении
          отзывов.
        </Description>
      </DescriptionWrapper>
      <ButtonsWrapper>
        <LogoutButton onClick={() => {
          props.lockPage();
          cookieManager.remove(cookiesList.bearer);
          window.location.replace(process.env.REACT_APP_START_PAGE as string);
        }}
        />
        <ProceedButton onClick={() => {
          setIsInProgress(true);
        }}
        />
      </ButtonsWrapper>
    </>
  );

  const loadingView = (
    <>
      <RocketLoader style={{ width: '15rem' }} />
    </>
  );

  return (
    <DimmingPopupWrapper>
      <Frame>
        {!isInProgress ? defaultView : loadingView}
      </Frame>
    </DimmingPopupWrapper>
  );
};

export default connect(null, mapDispatchToProps)(RegistrationPopup);
