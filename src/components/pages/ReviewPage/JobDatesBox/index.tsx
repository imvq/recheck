import { c } from 'compress-tag';
import { memo, useState } from 'react';

import * as styled from 'components/shared/BoxBase';

import ContentSubareaDelimiter from 'components/shared/ContentSubareaDelimiter';
import CustomButton from 'components/shared/CustomButton';
import CustomCheckbox from 'components/shared/CustomCheckbox';
import CustomSelect from 'components/shared/CustomSelect';

import { getAvailableYears, getAvailableMonths, getMonthName, monthHandler, years, yearHandler } from 'commons/utils/misc';

interface Props {
  pageLabel: string;
  onStepBack(): void;
  onStepForward(commentToPush: string): void;
  children: string;
}

function JobDatesBox(props: Props) {
  const [dates, setDates] = useState({
    monthFrom: null as (null | number),
    yearFrom: null as (null | number),
    hasNotFinished: false,
    monthTo: null as (null | number),
    yearTo: null as (null | number)
  });

  const canProceed = dates.yearFrom && dates.monthFrom && (
    dates.hasNotFinished || (dates.yearTo && dates.monthTo)
  );

  const onForwardHandler = canProceed ? proceed : () => {};

  function proceed() {
    const answer = c`
      Начало работы: ${getMonthName(dates.monthFrom)} ${dates.yearFrom}
      ${dates.hasNotFinished ? '' : c`
      Текущее место работы: ${getMonthName(dates.monthTo)} ${dates.yearTo}`} `;

    props.onStepForward(answer);
  }

  function customMonthFromHandler(month: number) {
    setDates({ ...dates, monthFrom: month, yearTo: null, monthTo: null });
  }

  function customYearFromHandler(year: number) {
    setDates({ ...dates, yearFrom: year, monthFrom: null, yearTo: null, monthTo: null });
  }

  function hasNotFinishedHandler(flag: boolean) {
    setDates({ ...dates, hasNotFinished: flag, yearTo: null, monthTo: null });
  }

  function customMonthToHandler(month: number) {
    setDates({ ...dates, monthTo: month });
  }

  function customYearToHandler(year: number) {
    setDates({ ...dates, yearTo: year, monthTo: null });
  }

  const ChildrenSection = (
    <styled.InputGroupWrapper>
      <styled.InputDescriptionWrapper>
        <styled.InputDescription>
          {props.children}
        </styled.InputDescription>
      </styled.InputDescriptionWrapper>

      <ContentSubareaDelimiter quarter />

      <styled.SimpleText>Дата начала работы:</styled.SimpleText>

      <ContentSubareaDelimiter eighth />

      <styled.InputRowWrapper>
        <CustomSelect
          width='49%'
          options={years}
          placeholder='Год'
          currentValue={dates.yearFrom}
          onNewOptionSelected={option => yearHandler(option, customYearFromHandler)}
        />
        <CustomSelect
          width='49%'
          options={getAvailableMonths(dates.yearFrom)}
          placeholder='Месяц'
          currentValue={getMonthName(dates.monthFrom)}
          onNewOptionSelected={option => monthHandler(option, customMonthFromHandler)}
          isDisabled={dates.yearFrom === null}
        />
      </styled.InputRowWrapper>

      <ContentSubareaDelimiter quarter />

      <CustomCheckbox isChecked={dates.hasNotFinished} onChange={hasNotFinishedHandler}>
        Текущее место работы
      </CustomCheckbox>

      <ContentSubareaDelimiter half />

      {!dates.hasNotFinished && (
        <>
          <styled.SimpleText>Дата окончания работы:</styled.SimpleText>

          <ContentSubareaDelimiter eighth />

          <styled.InputRowWrapper>
            <CustomSelect
              width='49%'
              options={getAvailableYears(dates.yearFrom)}
              placeholder='Год'
              currentValue={dates.yearTo}
              onNewOptionSelected={option => yearHandler(option, customYearToHandler)}
              isDisabled={dates.monthFrom === null}
            />
            <CustomSelect
              width='49%'
              options={getAvailableMonths(dates.yearTo, dates.yearFrom, dates.monthFrom)}
              placeholder='Месяц'
              currentValue={getMonthName(dates.monthTo)}
              onNewOptionSelected={option => monthHandler(option, customMonthToHandler)}
              isDisabled={dates.yearTo === null}
            />
          </styled.InputRowWrapper>
        </>
      )}
    </styled.InputGroupWrapper>
  );

  const ButtonsSection = (
    <styled.ButtonGroupWrapper>
      <CustomButton isHollow isDisabled={false} onClick={props.onStepBack}>
        Назад
      </CustomButton>

      <CustomButton isDisabled={!canProceed} onClick={onForwardHandler}>
        Далее
      </CustomButton>
    </styled.ButtonGroupWrapper>
  );

  return (
    <styled.BoxBaseWrapper>
      {ChildrenSection}
      <styled.StepWrapper><span>{props.pageLabel}</span></styled.StepWrapper>
      {ButtonsSection}
    </styled.BoxBaseWrapper>
  );
}

export default memo(JobDatesBox);
