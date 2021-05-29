import { connect } from 'react-redux';

import { AppState, clearTasks, clearStrengths, setReviewStrengths } from 'store';
import * as generalTypes from 'utils/typing/general';
import { textAreaHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  BoxBaseWrapper,
  InputGroupWrapper, InputDescriptionWrapper, InputDescription, TextArea,
  ButtonGroupWrapper, StepWrapper
} from '../../../shared/BoxBase';

const mapStateToProps = (store: AppState): IStateProps => ({
  strengths: store.reviews.strengths
});

const mapDispatchToProps: IDispatchProps = {
  clearTasks,
  clearStrengths,
  setStrengths: setReviewStrengths
};

/**
 * Review box with question about candidate strengths.
 */
const BoxStepB = (props: IProps) => {
  const strengthsHandler = (event: generalTypes.TextAreaEvent) => textAreaHandler(
    event,
    props.setStrengths
  );

  const canProceed = !!props.strengths;

  const returnHandler = () => {
    props.clearTasks();
    props.clearStrengths();
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
          <InputDescription>Опишите сильные стороны кандидата в работе</InputDescription>
        </InputDescriptionWrapper>
        <TextArea onChange={strengthsHandler} />
      </InputGroupWrapper>
      <StepWrapper><span>3 / 12</span></StepWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepB);
