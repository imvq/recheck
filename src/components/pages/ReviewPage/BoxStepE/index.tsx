import { connect } from 'react-redux';

import {
  AppState, clearResults, clearLevelData, setReviewLevelMark, setReviewLevelComment
} from 'store';
import { TextAreaEvent } from 'utils/types.common';
import { textAreaHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import MarkSelector from '../MarkSelector';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  BoxBaseWrapper, MarkSelectorDescription, MarkSelectorDescriptionWrapper,
  MarkSelectorWrapper, ButtonGroupWrapper
} from '../BoxBase';

const mapStateToProps = (store: AppState): IStateProps => ({
  levelMark: store.reviews.levelMark,
  levelComment: store.reviews.levelComment
});

const mapDispatchToProps: IDispatchProps = {
  clearResults,
  clearLevelData,
  setLevelMark: setReviewLevelMark,
  setLevelComment: setReviewLevelComment,
};

const labels = [
  'Недостаточно',
  'Нормально',
  'Выше ожиданий'
];

/**
 * Review box with question about what results the andidate ahieved.
 */
const BoxStepB = (props: IProps) => {
  const tasksHandler = (event: TextAreaEvent) => textAreaHandler(event, props.setLevelComment);

  const canProceed = !!props.levelMark && !!props.levelComment;

  const returnHandler = () => {
    props.clearResults();
    props.clearLevelData();
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
            Оцените уровень знаний для должности, на которой был кандидат
          </MarkSelectorDescription>
        </MarkSelectorDescriptionWrapper>
        <MarkSelector labels={labels} setMark={props.setLevelMark} />
      </MarkSelectorWrapper>
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
