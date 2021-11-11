import { useState, useRef } from 'react';
import { validate as validateEmail } from 'email-validator';

import * as SvgLoaders from 'svg-loaders-react';

import cssVars from 'commons/styles/cssVars';

import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { onExit, showToast } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';
import { AppState, setPageLocked, setEmail } from 'store';

import CustomButton from 'components/shared/CustomButton';

import * as misc from './misc';
import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  email: store.profile.email,
  privateToken: store.profile.privateToken
});

const mapDispatchToProps: types.IDispatchProps = {
  setPageLocked,
  setEmail
};

function UserConfirmationAwaiterPage(props: types.IProps) {
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

  function recalculateEmailErrorState() {
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

    apiClient.checkIfEmailIsAvailable(emailState.email)
      .then(checkData => setEmailState({
        ...latestEmailState.current,
        isEmailAvailabilityErrorVisible: !checkData.data.success
      }))
      .catch(() => setEmailState({
        ...latestEmailState.current,
        isEmailAvailabilityErrorVisible: true
      }));
  }

  /**
   * Used to send another one confirmation mail.
   * The email used is the email that was entered when registering.
   */
  function resendConfirmationHandler() {
    apiClient.resendConfirmation(props.privateToken as string);
    showToast('Письмо отправлено повторно');
  }

  /**
   * Used to send another one confirmation mail changing the email.
   * The email used is the email that is entered within the page.
   */
  function reassignConfirmationHandler() {
    apiClient.resendConfirmation(props.privateToken as string, emailState.email);
    showToast('Письмо отправлено на новый адрес');

    props.setEmail(emailState.email);
    resetPopupState();
  }

  function resetPopupState() {
    setIsEmailBlockExpanded(false);
    setEmailState({
      email: '',
      isEmailValid: false,
      isEmailAvailabilityErrorVisible: false,
      isEmailValidationErrorVisible: false
    });
  }

  const ExitButton = (
    <styled.ButtonWrapper>
      <CustomButton
        width='16rem'
        isDisabled={false}
        isHollow
        onClick={() => onExit(props.setPageLocked)}
      >
        Выйти из учётной записи
      </CustomButton>
    </styled.ButtonWrapper>
  );

  const ResendButton = (
    <styled.ButtonWrapper>
      <CustomButton
        width='16rem'
        isDisabled={false}
        isHollow
        onClick={resendConfirmationHandler}
      >
        Отправить письмо повторно
      </CustomButton>
    </styled.ButtonWrapper>
  );

  const ReassignButton = (
    <styled.ButtonWrapper>
      <CustomButton
        width='16rem'
        isDisabled={false}
        isHollow
        onClick={() => setIsEmailBlockExpanded(true)}
      >
        Изменить введённый почтовый ящик
      </CustomButton>
    </styled.ButtonWrapper>
  );

  const ButtonsSection = (
    <>
      {ExitButton}
      {ResendButton}
      {ReassignButton}
    </>
  );

  const ReturnSection = (
    <styled.ButtonWrapper>
      <CustomButton width='16rem' isDisabled={false} isHollow onClick={resetPopupState}>
        Назад
      </CustomButton>
    </styled.ButtonWrapper>
  );

  const ConfirmationSection = (
    <styled.ButtonWrapper>
      <CustomButton
        width='16rem'
        isDisabled={!misc.canProceed(emailState)}
        isHollow
        onClick={reassignConfirmationHandler}
      >
        Подтвердить
      </CustomButton>
    </styled.ButtonWrapper>
  );

  const InputSection = (
    <styled.InputWrapper>
      <styled.Input
        type='text'
        placeholder='Новый почтовый адрес'
        onBlur={recalculateEmailErrorState}
        onChange={event => {
          setEmailState({
            email: event.target.value,
            isEmailValid: validateEmail(event.target.value),
            isEmailValidationErrorVisible: false,
            isEmailAvailabilityErrorVisible: false
          });
        }}
      />
    </styled.InputWrapper>
  );

  return (
    <styled.Wrapper>
      <styled.MainFrame>
        <styled.Text>На вашу почту было отправлено письмо с дальнейшими указаниями.</styled.Text>
        <styled.Text>Пожалуйста, проверьте ваш почтовый ящик.</styled.Text>

        {!isEmailBlockExpanded && ButtonsSection}

        {isEmailBlockExpanded && (
          <>
            {ReturnSection}
            {InputSection}
            {ConfirmationSection}

            {emailState.isEmailValidationErrorVisible
              && (<styled.TextAlert>Некорректный почтовый адрес</styled.TextAlert>)}
            {emailState.isEmailAvailabilityErrorVisible
              && (<styled.TextAlert>Этот почтовый адрес уже занят</styled.TextAlert>)}
            {emailState.isEmailAvailabilityErrorVisible === null
              && (<SvgLoaders.Oval stroke={cssVars.colorForegroundPickAux1} />)}
          </>
        )}

      </styled.MainFrame>

      {/* Toast notification wrapper. */}
      <ToastContainer />
    </styled.Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConfirmationAwaiterPage);
