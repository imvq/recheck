import { useState, useRef } from 'react';
import { connect } from 'react-redux';
import * as SvgLoaders from 'svg-loaders-react';

import Api from 'utils/api';
import { AppState, setPageLocked } from 'store';
import CustomButton from 'components/shared/CustomButton';
import { isValidEmail as validateEmail, onExit } from 'utils/functions';

import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo
});

const mapDispatchToProps: types.IDispatchProps = {
  lockPage: setPageLocked
};

const UserConfirmationAwaiterPage = (props: types.IProps) => {
  const [isEmailBlockExpanded, setIsEmailBlockExpanded] = useState(false);

  // Flags defining email validation state and the fact the validation errors are visible.
  // Validation errors are not supposed to be always visible when the email
  // is not correct for any reason.
  // The values is supposed to change simultaneously.
  const [emailState, setEmailState] = useState<types.IEmailState>({
    email: '',
    isEmailValid: false,
    isEmailValidationErrorVisible: false,
    isEmailAvailabilityErrorVisible: false
  });

  // Since the API doesn't respond instantly (while checking email availability)
  // checkIsEmailAvailable's thennable gets outdated emailState from closure.
  // To avoid this we need to store actual email data value using reference.
  const latestEmailState = useRef(emailState);

  const canProceed = () => emailState.isEmailValid
    && !emailState.isEmailAvailabilityErrorVisible
    && emailState.isEmailAvailabilityErrorVisible !== null;

  const recalculateEmailErrorState = () => {
    setEmailState(() => {
      const updatedEmailState = {
        ...emailState,
        isEmailValidationErrorVisible: !validateEmail(emailState.email),
        // null means availability check is in progress,
        // e.i. cannot proceed with email update.
        isEmailAvailabilityErrorVisible: null
      };

      latestEmailState.current = updatedEmailState;
      return updatedEmailState;
    });

    Api.checkIsEmailAvailable(emailState.email)
      .then(checkData => setEmailState({
        ...latestEmailState.current,
        isEmailAvailabilityErrorVisible: !checkData.data.success
      }))
      .catch(() => setEmailState({
        ...latestEmailState.current,
        isEmailAvailabilityErrorVisible: true
      }));
  };

  const resendConfirmation = () => {
    Api.resendConfirmation(props.currentProfileInfo.currentId);
  };

  const expand = () => { setIsEmailBlockExpanded(true); };

  const fold = () => {
    setIsEmailBlockExpanded(false);
    setEmailState({
      email: '',
      isEmailValid: false,
      isEmailAvailabilityErrorVisible: false,
      isEmailValidationErrorVisible: false
    });
  };

  return (
    <styled.Wrapper>
      <styled.MainFrame>
        <styled.Text>На вашу почту было отправлено письмо с дальнейшими указаниями.</styled.Text>
        <styled.Text>Пожалуйста, проверьте ваш почтовый ящик.</styled.Text>

        {!isEmailBlockExpanded && (
          <>
            <styled.ButtonWrapper>
              <CustomButton width='16rem' isDisabled={false} isHollow onClick={() => onExit(props.lockPage)}>
                Выйти из учётной записи
              </CustomButton>
            </styled.ButtonWrapper>

            <styled.ButtonWrapper>
              <CustomButton width='16rem' isDisabled={false} isHollow onClick={resendConfirmation}>
                Отправить письмо повторно
              </CustomButton>
            </styled.ButtonWrapper>

            <styled.ButtonWrapper>
              <CustomButton width='16rem' isDisabled={false} isHollow onClick={expand}>
                Изменить введённый почтовый ящик
              </CustomButton>
            </styled.ButtonWrapper>
          </>
        )}

        {isEmailBlockExpanded && (
          <>
            <styled.ButtonWrapper>
              <CustomButton width='16rem' isDisabled={!canProceed()} isHollow onClick={() => { alert(emailState.email); }}>
                Подтвердить
              </CustomButton>
            </styled.ButtonWrapper>

            <styled.ButtonWrapper>
              <CustomButton width='16rem' isDisabled={false} isHollow onClick={fold}>
                Назад
              </CustomButton>
            </styled.ButtonWrapper>

            <styled.InputWrapper>
              <styled.Input
                type='text'
                placeholder='Новый почтовый адрес'
                onBlur={recalculateEmailErrorState}
                onChange={(event) => {
                  setEmailState({
                    email: event.target.value,
                    isEmailValid: validateEmail(event.target.value),
                    isEmailValidationErrorVisible: false,
                    isEmailAvailabilityErrorVisible: false
                  });
                }}
              />
            </styled.InputWrapper>

            {emailState.isEmailValidationErrorVisible
              && (<styled.TextAlert>Некорректный почтовый адрес</styled.TextAlert>)}
            {emailState.isEmailAvailabilityErrorVisible
              && (<styled.TextAlert>Этот почтовый адрес уже занят</styled.TextAlert>)}
            {emailState.isEmailAvailabilityErrorVisible === null
              && (<SvgLoaders.Oval stroke='#33c7ba' />)}
          </>
        )}

      </styled.MainFrame>
    </styled.Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserConfirmationAwaiterPage);
