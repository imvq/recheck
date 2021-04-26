import { useState } from 'react';

import { InputEvent, OptionType } from 'utils/types.common';
import { inputHandler, isValidEmail, isValidUrl, getNValuesDown } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import CustomSelect from 'components/shared/CustomSelect';
import { IProps } from './types';
import {
  BoxBaseWrapper, ButtonGroupWrapper, InputRowWrapper, TextDescription,
  InputGroupWrapper, InputDescriptionWrapper, InputDescription, Input
} from '../../../shared/BoxBase';

const months: OptionType[] = [
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

export default (props: IProps) => {
  const [email, setEmail] = useState('');
  const [companySite, setCompanySite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [workStartMonth, setWorkStartMonth] = useState(-1);
  const [workStartYear, setWorkStartYear] = useState(-1);

  const [isEmailErrorVisible, setIsEmailErrorVisible] = useState(false);
  const recalculateEmailErrorVisibility = () => {
    setIsEmailErrorVisible(!isValidEmail(email));
  };

  const [isSiteErrorVisible, setIsSiteErrorVisible] = useState(false);
  const recalculateSiteErrorVisibility = () => {
    setIsSiteErrorVisible(!isValidUrl(companySite));
  };

  const emailHandler = (event: InputEvent) => {
    setIsEmailErrorVisible(false);
    setEmail(event.target.value);
  };

  const companySiteHandler = (event: InputEvent) => {
    setIsSiteErrorVisible(false);
    setCompanySite(event.target.value);
  };

  const companyNameHandler = (event: InputEvent) => inputHandler(event, setCompanyName);
  const positionHandler = (event: InputEvent) => inputHandler(event, setPosition);
  const monthHandler = (option: OptionType) => setWorkStartMonth(option.key);
  const yearHandler = (option: OptionType) => setWorkStartYear(Number.parseInt(option.text, 10));

  const canProceed = () => isValidEmail(email) && !!companySite
    && !!companyName && !!position
    && workStartMonth > -1 && workStartYear > -1;

  function proceedIfAllowed() {
    if (canProceed()) {
      props.onProceed({ email, companySite, companyName, position, workStartMonth, workStartYear });
    }
  }

  return (
    <BoxBaseWrapper>
      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Рабочий email:</InputDescription>
        </InputDescriptionWrapper>
        <Input type='text' onBlur={recalculateEmailErrorVisibility} onChange={emailHandler} />
        {isEmailErrorVisible
          ? <TextDescription isHighlighted>Некорректный почтовый адрес</TextDescription>
          : null}
      </InputGroupWrapper>

      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Сайт компании, где вы работаете:</InputDescription>
        </InputDescriptionWrapper>
        <Input type='text' onBlur={recalculateSiteErrorVisibility} onChange={companySiteHandler} />
        {isSiteErrorVisible
          ? <TextDescription isHighlighted>Некорректный URL страницы</TextDescription>
          : null}
      </InputGroupWrapper>

      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Название компании, где вы работаете:</InputDescription>
        </InputDescriptionWrapper>
        <Input type='text' onChange={companyNameHandler} />
      </InputGroupWrapper>

      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Ваша должность:</InputDescription>
        </InputDescriptionWrapper>
        <Input type='text' onChange={positionHandler} />
      </InputGroupWrapper>

      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Дата начала работы:</InputDescription>
        </InputDescriptionWrapper>
        <InputRowWrapper>
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
        </InputRowWrapper>
      </InputGroupWrapper>

      <TextDescription>Все поля обязательны к заполнению</TextDescription>

      <ButtonGroupWrapper>
        <CustomButton isDisabled={!canProceed()} onClick={proceedIfAllowed}>
          Продолжить
        </CustomButton>
      </ButtonGroupWrapper>
    </BoxBaseWrapper>
  );
};
