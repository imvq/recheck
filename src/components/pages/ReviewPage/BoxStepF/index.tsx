import { connect } from 'react-redux';

import { AppState, clearLevelData, clearActivityData, setReviewActivityMark, setReviewActivityComment } from 'store';
import * as generalTypes from 'utils/typing/general';
import { textAreaHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import MarkSelector from '../MarkSelector';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  BoxBaseWrapper, ButtonGroupWrapper, CommentArea,
  MarkSelectorDescription, MarkSelectorDescriptionWrapper, MarkSelectorWrapper,
  InputGroupWrapper, StepWrapper
} from '../../../shared/BoxBase';

const mapStateToProps = (store: AppState): IStateProps => ({
  activityMark: store.reviews.activityMark,
  activityComment: store.reviews.activityComment
});

const mapDispatchToProps: IDispatchProps = {
  clearLevelData,
  clearActivityData,
  setActivityMark: setReviewActivityMark,
  setActivityComment: setReviewActivityComment
};

const labels = [
  'Недостаточная заинтересованность работой',
  'Есть необходимая вовлечённость',
  'Большая мотивация и проактивность'
];

/**
 * Review box with question about the candidate's activity.
 */
const BoxStepF = (props: IProps) => {
  const activityHandler = (event: generalTypes.TextAreaEvent) => textAreaHandler(
    event, props.setActivityComment
  );

  const canProceed = !!props.activityMark && !!props.activityComment;

  const returnHandler = () => {
    props.clearLevelData();
    props.clearActivityData();
    props.onBack();
  };

  const proceedIfAllowed = () => {
    if (canProceed) {
      props.onNextStep();
    }
  };

  return (
    <BoxBaseWrapper>
      <MarkSelectorWrapper>
        <MarkSelectorDescriptionWrapper>
          <MarkSelectorDescription>
            Оцените мотивированность и проктивность кандидата в работе
          </MarkSelectorDescription>
        </MarkSelectorDescriptionWrapper>
        <MarkSelector hasEnlargedLabels labels={labels} setMark={props.setActivityMark} />
      </MarkSelectorWrapper>
      <InputGroupWrapper>
        <CommentArea placeholder='Прокомментируйте свой ответ' onChange={activityHandler} />
      </InputGroupWrapper>
      <StepWrapper><span>7 / 12</span></StepWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepF);
