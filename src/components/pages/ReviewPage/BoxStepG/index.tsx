import { connect } from 'react-redux';

import {
  AppState, clearActivityData, clearOwnHireOpinionData,
  setReviewOwnHireOpinionMark, setReviewOwnHireOpinionComment
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
  ownHireOpinionMark: store.reviews.ownHireOpinionMark,
  ownHireOpinionComment: store.reviews.ownHireOpinionComment
});

const mapDispatchToProps: IDispatchProps = {
  clearActivityData,
  clearOwnHireOpinionData,
  setOwnHireOpinionMark: setReviewOwnHireOpinionMark,
  setOwnHireOpinionComment: setReviewOwnHireOpinionComment,
};

const labels = [
  'Нет',
  'Да, но есть вопросы',
  'Точно да'
];

/**
 * Review box with question about hiring of the candidate.
 */
const BoxStepG = (props: IProps) => {
  const ownHireOpinionHandler = (event: TextAreaEvent) => textAreaHandler(
    event, props.setOwnHireOpinionComment
  );

  const canProceed = !!props.ownHireOpinionMark && !!props.ownHireOpinionComment;

  const returnHandler = () => {
    props.clearActivityData();
    props.clearOwnHireOpinionData();
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
            Вы бы взяли/рекомендовали этого кандидата на аналогичную работу?
          </MarkSelectorDescription>
        </MarkSelectorDescriptionWrapper>
        <MarkSelector hasEnlargedLabels labels={labels} setMark={props.setOwnHireOpinionMark} />
      </MarkSelectorWrapper>
      <InputGroupWrapper>
        <CommentArea placeholder='Прокомментируйте свой ответ' onChange={ownHireOpinionHandler} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepG);
