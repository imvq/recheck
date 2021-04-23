import { OptionType } from 'utils/types.common';
import { getNValuesDown } from 'utils/functions';
import CustomSelect from 'components/shared/CustomSelect';
import {
  BoxBaseWrapper, InputRowWrapper,
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

export default () => (
  <BoxBaseWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Рабочий email:</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' onChange={() => {}} />
    </InputGroupWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Сайт компании, где вы работаете:</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' onChange={() => {}} />
    </InputGroupWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Название компании, где вы работаете:</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' onChange={() => {}} />
    </InputGroupWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Ваша позиция:</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' onChange={() => {}} />
    </InputGroupWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Дата начала работы:</InputDescription>
      </InputDescriptionWrapper>
      <InputRowWrapper>
        <CustomSelect width='49%' options={months} placeholder='Месяц' onNewOptionSelected={() => {}} />
        <CustomSelect width='49%' options={years} placeholder='Год' onNewOptionSelected={() => {}} />
      </InputRowWrapper>
    </InputGroupWrapper>
  </BoxBaseWrapper>
);
