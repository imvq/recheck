import { connect } from 'react-redux';

import {
  AppState, clearOwnHireOpinionData, clearQualityData,
  setReviewQualityMark, setReviewQualityComment
} from 'store';
import { TextAreaEvent } from 'utils/types.common';
import { textAreaHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import MarkSelector from '../MarkSelector';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  BoxBaseWrapper, ButtonGroupWrapper, CommentArea,
  MarkSelectorDescription, MarkSelectorDescriptionWrapper, MarkSelectorWrapper,
  InputGroupWrapper
} from '../BoxBase';

const mapStateToProps = (store: AppState): IStateProps => ({
  qualityMark: store.reviews.qualityMark,
  qualityComment: store.reviews.qualityComment
});

const mapDispatchToProps: IDispatchProps = {
  clearOwnHireOpinionData,
  clearQualityData,
  setQualityMark: setReviewQualityMark,
  setQualityComment: setReviewQualityComment
};

const labels = [
  'Часто возникают ошибки',
  'Ошибки возможны',
  'Очень качественная работа'
];

/**
 * Review box with question about what the candidate's work quality.
 */
const BoxStepH = (props: IProps) => {
  const qualityHandler = (event: TextAreaEvent) => textAreaHandler(
    event, props.setQualityComment
  );

  const canProceed = !!props.qualityMark && !!props.qualityComment;

  const returnHandler = () => {
    props.clearOwnHireOpinionData();
    props.clearQualityData();
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
            Насколько качественно кандидат выполняет свою работу?
          </MarkSelectorDescription>
        </MarkSelectorDescriptionWrapper>
        <MarkSelector hasEnlargedLabels labels={labels} setMark={props.setQualityMark} />
      </MarkSelectorWrapper>
      <InputGroupWrapper>
        <CommentArea placeholder='Прокомментируйте свой ответ' onChange={qualityHandler} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepH);
