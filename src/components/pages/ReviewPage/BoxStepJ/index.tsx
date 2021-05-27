import { connect } from 'react-redux';

import { AppState, clearLeadershipData, clearAdviceData, setReviewAdviceComment } from 'store';
import * as generalTypes from 'utils/typing/general';
import { textAreaHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  BoxBaseWrapper, ButtonGroupWrapper, CommentArea,
  InputDescription, InputDescriptionWrapper, Input,
  InputGroupWrapper
} from '../../../shared/BoxBase';

const mapStateToProps = (store: AppState): IStateProps => ({
  adviceComment: store.reviews.adviceComment
});

const mapDispatchToProps: IDispatchProps = {
  clearLeadershipData,
  clearAdviceData,
  setAdviceComment: setReviewAdviceComment
};

/**
 * Review box with an advice to the candidate.
 */
const BoxStepJ = (props: IProps) => {
  const leadershipHandler = (event: generalTypes.TextAreaEvent) => textAreaHandler(
    event, props.setAdviceComment
  );

  const canProceed = !!props.adviceComment;

  const returnHandler = () => {
    props.clearLeadershipData();
    props.clearAdviceData();
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
            Какой совет вы можете дать будущему работодателю кандидата?
          </InputDescription>
        </InputDescriptionWrapper>
        <CommentArea placeholder='Прокомментируйте свой ответ' onChange={leadershipHandler} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepJ);
