import { connect } from 'react-redux';

import {
  AppState, clearQualityData, clearLeadershipData,
  setReviewLeadershipMark, setReviewLeadershipComment
} from 'store';
import * as GeneralTypes from 'utils/typing/general';
import { textAreaHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import MarkSelector from '../MarkSelector';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  BoxBaseWrapper, ButtonGroupWrapper, CommentArea,
  MarkSelectorDescription, MarkSelectorDescriptionWrapper, MarkSelectorWrapper,
  InputGroupWrapper
} from '../../../shared/BoxBase';

const mapStateToProps = (store: AppState): IStateProps => ({
  leadershipMark: store.reviews.leadershipMark,
  leadershipComment: store.reviews.leadershipComment
});

const mapDispatchToProps: IDispatchProps = {
  clearQualityData,
  clearLeadershipData,
  setLeadershipMark: setReviewLeadershipMark,
  setLeadershipComment: setReviewLeadershipComment
};

const labels = [
  'Нет',
  'Если улучшит свои качества',
  'Да'
];

/**
 * Review box with question about what the candidate's leadership.
 */
const BoxStepI = (props: IProps) => {
  const leadershipHandler = (event: GeneralTypes.TextAreaEvent) => textAreaHandler(
    event, props.setLeadershipComment
  );

  const canProceed = !!props.leadershipMark && !!props.leadershipComment;

  const returnHandler = () => {
    props.clearQualityData();
    props.clearLeadershipData();
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
            Может ли кандидат занимать руководящие должности?
          </MarkSelectorDescription>
        </MarkSelectorDescriptionWrapper>
        <MarkSelector hasEnlargedLabels labels={labels} setMark={props.setLeadershipMark} />
      </MarkSelectorWrapper>
      <InputGroupWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepI);
