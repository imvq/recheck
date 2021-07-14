import { useState, memo } from 'react';
import { connect } from 'react-redux';

import { AppState, clearMatchedCompanies, loadMatchedCompanies } from 'store';
import * as generalTypes from 'utils/typing/general';
import { inputHandler, getNValuesDown } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import CustomSelect from 'components/shared/CustomSelect';
import CompanyBadges from './CompanyBadges';

import * as types from './types';
import * as styled from '../../../shared/BoxBase';
import { isValidEmail, mapCompaniesDataToOptions } from './functions';

const months: generalTypes.OptionType[] = [
  { key: 0, text: 'Январь' },
  { key: 1, text: 'Февраль' },
  { key: 2, text: 'Март' },
  { key: 3, text: 'Апрель' },
  { key: 4, text: 'Май' },
  { key: 5, text: 'Июнь' },
  { key: 6, text: 'Июль' },
  { key: 7, text: 'Август' },
  { key: 8, text: 'Сентябрь' },
  { key: 9, text: 'Октябрь' },
  { key: 10, text: 'Ноябрь' },
  { key: 11, text: 'Декабрь' },
];

const years = getNValuesDown(new Date().getFullYear(), 50)
  .map((value, index) => ({ key: index, text: value.toString() }));

const mapStateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo,
  matchedCompanies: store.search.matchedCompanies,
  referral: store.interaction.referral
});

const mapDispatchToProps: types.IDispatchProps = {
  loadMatchedCompanies,
  clearMatchedCompanies
};

const RegistrationBox = (props: types.IProps) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState({ id: -1, name: '' });
  const setCompanyName = (name: string) => setCompany({ id: -1, name });
  const [position, setPosition] = useState('');
  const [workStartMonth, setWorkStartMonth] = useState(-1);
  const [workStartYear, setWorkStartYear] = useState(-1);

  const [isEmailErrorVisible, setIsEmailErrorVisible] = useState(false);
  const recalculateEmailErrorVisibility = () => {
    setIsEmailErrorVisible(!isValidEmail(email));
  };

  const findCompanyMatches = (sequence: string) => {
    props.loadMatchedCompanies(sequence);
  };

  const emailHandler = (event: generalTypes.InputEvent) => {
    setIsEmailErrorVisible(false);
    setEmail(event.target.value);
  };

  const companyNameHandler = (event: generalTypes.InputEvent) => inputHandler(
    event,
    setCompanyName
  );

  const positionHandler = (event: generalTypes.InputEvent) => inputHandler(
    event,
    setPosition
  );

  const monthHandler = (option: generalTypes.OptionType) => setWorkStartMonth(option.key);
  const yearHandler = (option: generalTypes.OptionType) => setWorkStartYear(
    Number.parseInt(option.text, 10)
  );

  const canProceed = () => isValidEmail(email)
    && !!company && !!position
    && workStartMonth > -1 && workStartYear > -1;

  function proceedIfAllowed() {
    if (canProceed()) {
      props.onProceed({
        profileId: props.currentProfileInfo.currentId,
        name: props.currentProfileInfo.currentName,
        photoUrl: props.currentProfileInfo.currentPhotoUrl,
        email,
        company,
        position,
        workStartMonth,
        workStartYear,
        referral: props.referral
      });
    }
  }

  return (
    <styled.BoxBaseWrapper>
      <styled.InputGroupWrapper>
        <styled.InputDescriptionWrapper>
          <styled.InputDescription>Рабочий email:</styled.InputDescription>
        </styled.InputDescriptionWrapper>
        <styled.Input type='text' onBlur={recalculateEmailErrorVisibility} onChange={emailHandler} />
        {isEmailErrorVisible
          && (
            <styled.TextDescription isHighlighted>
              Некорректный почтовый адрес
            </styled.TextDescription>
          )}
      </styled.InputGroupWrapper>

      <styled.InputGroupWrapper>
        <styled.InputDescriptionWrapper>
          <styled.InputDescription>Название компании, где вы работаете:</styled.InputDescription>
        </styled.InputDescriptionWrapper>
        <styled.InputWithOptionsWrapper>
          <styled.Input
            type='text'
            onChange={(event: generalTypes.InputEvent) => {
              companyNameHandler(event);
              if (event.target.value) {
                findCompanyMatches(event.target.value);
              } else {
                props.clearMatchedCompanies();
              }
            }}
            autoComplete='on'
            value={company.name}
          />

          {/* Companies with matched names. */}
          {props.matchedCompanies.length ? (
            <CompanyBadges
              options={mapCompaniesDataToOptions(props.matchedCompanies)}
              onClose={() => {
                props.clearMatchedCompanies();
              }}
              onOptionSelected={selected => {
                setCompany({ id: selected.key, name: selected.text });
                props.clearMatchedCompanies();
              }}
            />
          ) : null}
        </styled.InputWithOptionsWrapper>
      </styled.InputGroupWrapper>

      <styled.InputGroupWrapper>
        <styled.InputDescriptionWrapper>
          <styled.InputDescription>Ваша должность:</styled.InputDescription>
        </styled.InputDescriptionWrapper>
        <styled.Input type='text' onChange={positionHandler} />
      </styled.InputGroupWrapper>

      <styled.InputGroupWrapper>
        <styled.InputDescriptionWrapper>
          <styled.InputDescription>Дата начала работы:</styled.InputDescription>
        </styled.InputDescriptionWrapper>
        <styled.InputRowWrapper>
          <CustomSelect
            width='49%'
            options={months}
            placeholder='Месяц'
            onNewOptionSelected={monthHandler}
          />
          <CustomSelect
            width='49%'
            options={years}
            placeholder='Год'
            onNewOptionSelected={yearHandler}
          />
        </styled.InputRowWrapper>
      </styled.InputGroupWrapper>

      <styled.TextDescription>Все поля обязательны к заполнению</styled.TextDescription>

      <styled.ButtonGroupWrapper>
        <CustomButton isDisabled={!canProceed()} onClick={proceedIfAllowed}>
          Продолжить
        </CustomButton>
      </styled.ButtonGroupWrapper>
    </styled.BoxBaseWrapper>
  );
};

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(RegistrationBox)
);
