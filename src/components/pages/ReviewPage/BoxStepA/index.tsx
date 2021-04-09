import { connect } from 'react-redux';

import { AppState, clearInitialData, setReviewTasks } from 'store';
import { TextAreaEvent } from 'utils/types.common';
import { textAreaHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  BoxBaseWrapper,
  InputGroupWrapper, InputDescriptionWrapper, InputDescription, TextArea,
  ButtonGroupWrapper
} from '../BoxBase';

const mapStateToProps = (store: AppState): IStateProps => ({
  tasks: store.reviews.tasks
});

const mapDispatchToProps: IDispatchProps = {
  clearInitialData,
  setTasks: setReviewTasks
};

const BoxStepA = (props: IProps) => {
  const tasksHandler = (event: TextAreaEvent) => textAreaHandler(event, props.setTasks);

  const canProceed = !!props.tasks;

  const returnHandler = () => {
    props.clearInitialData();
    props.setTasks('');
    props.onBack();
  };

  const proceedIfAllowed = () => {
    if (canProceed) {
      props.onNextStep();
    }
  };

  return (
    <BoxBaseWrapper>
      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Какие задачи выполнял кандидат?</InputDescription>
        </InputDescriptionWrapper>
        <TextArea onChange={tasksHandler} />
      </InputGroupWrapper>
      <ButtonGroupWrapper>
        <CustomButton isHollow isDisabled={false} onClick={returnHandler}>
          Назад
        </CustomButton>
        <CustomButton isDisabled={!canProceed} onClick={proceedIfAllowed}>
          Далее
        </CustomButton>
      </ButtonGroupWrapper>
    </BoxBaseWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepA);
