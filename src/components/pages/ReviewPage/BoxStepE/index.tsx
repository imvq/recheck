import { connect } from 'react-redux';

import { AppState, clearResults, clearLevelData, setReviewLevelMark, setReviewLevelComment } from 'store';
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
  levelMark: store.reviews.levelMark,
  levelComment: store.reviews.levelComment
});

const mapDispatchToProps: IDispatchProps = {
  clearResults,
  clearLevelData,
  setLevelMark: setReviewLevelMark,
  setLevelComment: setReviewLevelComment
};

const labels = [
  'Недостаточно',
  'Нормально',
  'Выше ожиданий'
];

/**
 * Review box with question about the candidate's level.
 */
const BoxStepE = (props: IProps) => {
  const levelHandler = (event: generalTypes.TextAreaEvent) => textAreaHandler(
    event,
    props.setLevelComment
  );

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
      <InputGroupWrapper>
        <CommentArea placeholder='Прокомментируйте свой ответ' onChange={levelHandler} />
      </InputGroupWrapper>
      <StepWrapper><span>6 / 12</span></StepWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepE);
