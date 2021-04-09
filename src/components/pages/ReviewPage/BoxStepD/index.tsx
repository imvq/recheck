import { connect } from 'react-redux';

import {
  AppState, clearImprovements, clearResults, setReviewResults
} from 'store';
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
  results: store.reviews.results
});

const mapDispatchToProps: IDispatchProps = {
  clearImprovements,
  clearResults,
  setResults: setReviewResults
};

/**
 * Review box with question about what results the andidate ahieved.
 */
const BoxStepB = (props: IProps) => {
  const tasksHandler = (event: TextAreaEvent) => textAreaHandler(event, props.setResults);

  const canProceed = !!props.results;

  const returnHandler = () => {
    props.clearImprovements();
    props.clearResults();
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
          <InputDescription>
            Расскажите про результаты работы, которых достиг кандидат
          </InputDescription>
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepB);
