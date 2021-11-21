import { useState, useRef, memo } from 'react';
import { connect } from 'react-redux';
import { validate as validateEmail } from 'email-validator';

import { ICompanyBasic } from 'commons/types';
import { apiClient } from 'commons/utils/services';
import { AppState, clearMatchedCompanies } from 'store';
import { quickSearchCompanies } from 'store/thunks';

import CustomButton from 'components/shared/CustomButton';
import CustomSelect from 'components/shared/CustomSelect';
import DropList from 'components/shared/DropList';

import * as misc from './misc';
import * as types from './types';
import * as styled from '../../../shared/BoxBase';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  socialId: store.profile.socialId,
  matchedCompanies: store.search.quickSearchMatchedCompanies,
  inviter: store.profile.inviterShareableId
});

const mapDispatchToProps: types.IDispatchProps = {
  quickSearchCompanies,
  clearMatchedCompanies
};

function RegistrationBox(props: types.IProps) {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState<ICompanyBasic>({ id: -1, name: null });
  const [currentPosition, setCurrentPosition] = useState('');
  const [currentWorkMonthFrom, setCurrentWorkMonthFrom] = useState(-1);
  const [currentWorkYearFrom, setCurrentWorkYearFrom] = useState(-1);

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

  // Flag indicating if the user can press the registration button.
  const canProceed = misc.canProceed(
    fullName,
    emailState,
    company,
    currentPosition,
    currentWorkMonthFrom,
    currentWorkYearFrom
  );

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

  function proceedIfAllowed() {
    if (canProceed) {
      props.onRegisterButtonPressed({
        socialId: props.socialId as string,
        inviterId: props.inviter,
        fullName,
        photoUrl: null,
        email: emailState.email,
        company,
        currentPosition,
        currentWorkMonthFrom,
        currentWorkYearFrom
      });
    }
  }

  // Full name section. Users must choose how others will see them.
  const NameSection = (
    <styled.InputGroupWrapper>
      <styled.InputDescriptionWrapper>
        <styled.InputDescription>Ваше имя (то, как Вас будут видеть):</styled.InputDescription>
      </styled.InputDescriptionWrapper>
      <styled.Input type='text' onChange={event => setFullName(event.target.value)} />
    </styled.InputGroupWrapper>
  );

  // Email input filed with space reserved for displaying email errors.
  const EmailSection = (
    <styled.InputGroupWrapper>
      <styled.InputDescriptionWrapper>
        <styled.InputDescription>Рабочий email:</styled.InputDescription>
      </styled.InputDescriptionWrapper>

      <styled.Input
        type='text'
        onBlur={recalculateEmailErrorState}
        onChange={event => misc.emailHandler(event, setEmailState)}
      />

      {emailState.isEmailAvailabilityErrorVisible
          && (<styled.TextAlert isHighlighted>Этот почтовый адрес уже занят</styled.TextAlert>)}
      {emailState.isEmailValidationErrorVisible && (
        <styled.TextAlert isHighlighted>
          Некорректная почта. Предоставляемое значение должно быть валидным почтовым адресом
          вида myemail@example.com,
          а сам почтовый адрес должен относиться к домену, принадлежащему компании, в которой вы
          работаете.
        </styled.TextAlert>
      )}
    </styled.InputGroupWrapper>
  );

  // Field where users can type name of their company.
  const CompaniesInput = (
    <styled.Input
      type='text'
      autoComplete='on'
      value={company.name || ''}
      onChange={event => misc.companySelectorHandler(
        event,
        setCompany,
        props.quickSearchCompanies,
        props.clearMatchedCompanies
      )}
    />
  );

  // Companies with matched names.
  const MatchedCompanies = (
    <DropList
      options={misc.mapCompaniesDataToOptions(props.matchedCompanies)}
      onClose={props.clearMatchedCompanies}
      onOptionSelected={selected => {
        setCompany({ id: selected.key, name: selected.text });
        props.clearMatchedCompanies();
      }}
    />
  );

  // Finalization button.
  const ProceedButton = (
    <styled.ButtonGroupWrapper>
      <CustomButton
        isDisabled={!canProceed}
        onClick={proceedIfAllowed}
      >
        Продолжить
      </CustomButton>
    </styled.ButtonGroupWrapper>
  );

  // Companies input field and space reserved for companies dropping list.
  const CompaniesSection = (
    <styled.InputGroupWrapper>
      <styled.InputDescriptionWrapper>
        <styled.InputDescription>
          Название компании, где вы работаете:
        </styled.InputDescription>
      </styled.InputDescriptionWrapper>

      <styled.InputWithOptionsWrapper>
        {CompaniesInput}
        {props.matchedCompanies.length > 0 && MatchedCompanies}
      </styled.InputWithOptionsWrapper>
    </styled.InputGroupWrapper>
  );

  const PositionSection = (
    <styled.InputGroupWrapper>
      <styled.InputDescriptionWrapper>
        <styled.InputDescription>Ваша должность:</styled.InputDescription>
      </styled.InputDescriptionWrapper>
      <styled.Input type='text' onChange={event => misc.positionHandler(event, setCurrentPosition)} />
    </styled.InputGroupWrapper>
  );

  const DatePickers = (
    <styled.InputGroupWrapper>
      <styled.InputDescriptionWrapper>
        <styled.InputDescription>Дата начала работы:</styled.InputDescription>
      </styled.InputDescriptionWrapper>
      <styled.InputRowWrapper>
        <CustomSelect
          width='49%'
          options={misc.months}
          placeholder='Месяц'
          onNewOptionSelected={option => misc.monthHandler(option, setCurrentWorkMonthFrom)}
        />
        <CustomSelect
          width='49%'
          options={misc.years}
          placeholder='Год'
          onNewOptionSelected={option => misc.yearHandler(option, setCurrentWorkYearFrom)}
        />
      </styled.InputRowWrapper>
    </styled.InputGroupWrapper>
  );

  return (
    <styled.BoxBaseWrapper>
      {NameSection}
      {EmailSection}
      {CompaniesSection}
      {PositionSection}
      {DatePickers}

      <styled.TextAlert>Все поля обязательны к заполнению</styled.TextAlert>

      {ProceedButton}
    </styled.BoxBaseWrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(RegistrationBox));
