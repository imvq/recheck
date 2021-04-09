import { connect } from 'react-redux';

import {
  AppState, clearStrengths, clearImprovements, setReviewImprovements
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
  improvements: store.reviews.improvements
});

const mapDispatchToProps: IDispatchProps = {
  clearStrengths,
  clearImprovements,
  setImprovements: setReviewImprovements
};

/**
 * Review box with question about what the candidate can improve.
 */
const BoxStepC = (props: IProps) => {
  const improvementsHandler = (event: TextAreaEvent) => textAreaHandler(
    event, props.setImprovements
  );

  const canProceed = !!props.improvements;

  const returnHandler = () => {
    props.clearStrengths();
    props.clearImprovements();
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
            Какие знания и навыки можно улучшить кандидату, чтобы работать лучше?
          </InputDescription>
        </InputDescriptionWrapper>
        <TextArea onChange={improvementsHandler} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepC);
