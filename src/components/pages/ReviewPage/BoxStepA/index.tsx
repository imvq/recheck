import { connect } from 'react-redux';

import { AppState, clearInitialData, clearTasks, setReviewTasks } from 'store';
import * as generalTypes from 'utils/typing/general';
import { textAreaHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  BoxBaseWrapper,
  InputGroupWrapper, InputDescriptionWrapper, InputDescription, TextArea,
  ButtonGroupWrapper
} from '../../../shared/BoxBase';

const mapStateToProps = (store: AppState): IStateProps => ({
  tasks: store.reviews.tasks
});

const mapDispatchToProps: IDispatchProps = {
  clearInitialData,
  clearTasks,
  setTasks: setReviewTasks
};

/**
 * Review box with question about what tasks the candidate solved.
 */
const BoxStepA = (props: IProps) => {
  const tasksHandler = (event: generalTypes.TextAreaEvent) => textAreaHandler(
    event,
    props.setTasks
  );

  const canProceed = !!props.tasks;

  const returnHandler = () => {
    props.clearInitialData();
    props.clearTasks();
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
