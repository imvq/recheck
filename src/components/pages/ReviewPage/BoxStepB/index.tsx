import { useState } from 'react';

import { TextAreaEvent } from 'utils/types.common';
import { textAreaHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import { IProps } from '../BoxBase/types';
import {
  BoxBaseWrapper,
  InputGroupWrapper, InputDescriptionWrapper, InputDescription, TextArea,
  ButtonGroupWrapper
} from '../BoxBase';

export default (props: IProps) => {
  const [tasks, setTasks] = useState('');

  const tasksHandler = (event: TextAreaEvent) => textAreaHandler(event, setTasks);

  const canProceed = !!tasks;

  const proceedIfAllowed = () => {
    // TODO: update the state.
    if (canProceed) {
      props.onNextStep();
    }
  };

  return (
    <BoxBaseWrapper>
      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Опишите сильные стороны кандидата в работе</InputDescription>
        </InputDescriptionWrapper>
        <TextArea onChange={tasksHandler} />
      </InputGroupWrapper>
      <ButtonGroupWrapper>
        <CustomButton isDisabled={!canProceed} onClick={proceedIfAllowed}>
          Продолжить
        </CustomButton>
      </ButtonGroupWrapper>
    </BoxBaseWrapper>
  );
};
