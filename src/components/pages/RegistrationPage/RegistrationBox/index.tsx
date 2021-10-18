import { useState, useRef, memo } from 'react';
import { connect } from 'react-redux';

import { apiClient } from 'commons/utils/services';
import { AppState, clearMatchedCompanies, loadMatchedCompanies } from 'store';

import CustomButton from 'components/shared/CustomButton';
import CustomSelect from 'components/shared/CustomSelect';
import DropList from 'components/shared/DropList';

import * as misc from './misc';
import * as types from './types';
import * as styled from '../../../shared/BoxBase';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  matchedCompanies: store.search.quickSearchMatchedCompanies,
  referral: store.interaction.referral
});

const mapDispatchToProps: types.IDispatchProps = {
  loadMatchedCompanies,
  clearMatchedCompanies
};

function RegistrationBox(props: types.IProps) {
  const [company, setCompany] = useState({ id: -1, name: '' });
  const [position, setPosition] = useState('');
  const [workStartMonth, setWorkStartMonth] = useState(-1);
  const [workStartYear, setWorkStartYear] = useState(-1);

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
        isEmailValidationErrorVisible: !misc.validateEmailWithDomains(emailState.email),
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
    if (misc.canProceed(emailState, company, position, workStartMonth, workStartYear)) {
      props.onProceed({
        profileId: props.currentProfileInfo.currentId,
        name: props.currentProfileInfo.currentName,
        photoUrl: props.currentProfileInfo.currentPhotoUrl,
        email: emailState.email,
        company,
        position,
        workStartMonth,
        workStartYear,
        referral: props.referral
      });
    }
  }

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
      value={company.name}
      onChange={event => misc.companySelectorHandler(
        event,
        setCompany,
        props.loadMatchedCompanies,
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
        isDisabled={!misc.canProceed(emailState, company, position, workStartMonth, workStartYear)}
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
      <styled.Input type='text' onChange={event => misc.positionHandler(event, setPosition)} />
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
          onNewOptionSelected={option => misc.monthHandler(option, setWorkStartMonth)}
        />
        <CustomSelect
          width='49%'
          options={misc.years}
          placeholder='Год'
          onNewOptionSelected={option => misc.yearHandler(option, setWorkStartYear)}
        />
      </styled.InputRowWrapper>
    </styled.InputGroupWrapper>
  );

  return (
    <styled.BoxBaseWrapper>
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
