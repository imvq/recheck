import { validate as validateEmail } from 'email-validator';
import { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

import * as store from 'store';
import * as SvgLoaders from 'svg-loaders-react';

import cssVars from 'commons/styles/cssVars';

import { jumpTo, onExit, showToast } from 'commons/utils/misc';
import { apiClient } from 'commons/utils/services';

import CustomButton from 'components/shared/CustomButton';

import * as misc from './misc';
import * as types from './types';
import * as styled from './styled';

const mapStateToProps = (state: store.AppState): types.IStateProps => ({
  email: store.getCurrentEmail(state),
  privateToken: store.getCurrentPrivateToken(state),
  isRedirectedFromOrigin: store.getIsRedirectedFromOrigin(state)
});

const mapDispatchToProps: types.IDispatchProps = {
  setIsPageLocked: store.setIsPageLocked,
  setEmail: store.setEmail,
  setIsRedirectedFromOrigin: store.setIsRedirectedFromOrigin
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

  useEffect(() => {
    // If a user entered the page by typing the link directly
    // it must be redirected away.
    if (!props.isRedirectedFromOrigin) {
      jumpTo('/');
    }
  }, []);

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
    showToast('???????????? ???????????????????? ????????????????');
  }

  /**
   * Used to send another one confirmation mail changing the email.
   * The email used is the email that is entered within the page.
   */
  function reassignConfirmationHandler() {
    apiClient.resendConfirmation(props.privateToken as string, emailState.email);
    showToast('???????????? ???????????????????? ???? ?????????? ??????????');

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
        onClick={() => onExit(() => props.setIsPageLocked(true))}
      >
        ?????????? ???? ?????????????? ????????????
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
        ?????????????????? ???????????? ????????????????
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
        ???????????????? ?????????????????? ???????????????? ????????
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
        ??????????
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
        ??????????????????????
      </CustomButton>
    </styled.ButtonWrapper>
  );

  const InputSection = (
    <styled.InputWrapper>
      <styled.Input
        type='text'
        placeholder='?????????? ???????????????? ??????????'
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

  return props.isRedirectedFromOrigin ? (
    <styled.Wrapper>
      <styled.MainFrame>
        <styled.Text>???? ???????? ?????????? ???????? ???????????????????? ???????????? ?? ?????????????????????? ????????????????????.</styled.Text>
        <styled.Text>????????????????????, ?????????????????? ?????? ???????????????? ????????.</styled.Text>

        {!isEmailBlockExpanded && ButtonsSection}

        {isEmailBlockExpanded && (
          <>
            {ReturnSection}
            {InputSection}
            {ConfirmationSection}

            {emailState.isEmailValidationErrorVisible
              && (<styled.TextAlert>???????????????????????? ???????????????? ??????????</styled.TextAlert>)}
            {emailState.isEmailAvailabilityErrorVisible
              && (<styled.TextAlert>???????? ???????????????? ?????????? ?????? ??????????</styled.TextAlert>)}
            {emailState.isEmailAvailabilityErrorVisible === null
              && (<SvgLoaders.Oval stroke={cssVars.colorForegroundPickAux1} />)}
          </>
        )}

      </styled.MainFrame>
    </styled.Wrapper>
  ) : null;
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConfirmationAwaiterPage);
