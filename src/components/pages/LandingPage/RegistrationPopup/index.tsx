import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

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

const RegistrationPopup: FunctionComponent<IProps> = (props) => (
  <DimmingPopupWrapper>
    <Frame>
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
        <ProceedButton />
      </ButtonsWrapper>
    </Frame>
  </DimmingPopupWrapper>
);

export default connect(null, mapDispatchToProps)(RegistrationPopup);
