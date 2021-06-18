import { connect } from 'react-redux';

import {
  AppState, clearAdviceData, clearRecommendersData,
  setReviewRecommenderLink1, setReviewRecommenderLink2, setReviewRecommenderLink3
} from 'store';
import * as generalTypes from 'utils/typing/general';
import { inputHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from '../../../shared/BoxBase';

const mapStateToProps = (store: AppState): types.IStateProps => ({
  recommenderLink1: store.reviews.recommenderLink1,
  recommenderLink2: store.reviews.recommenderLink2,
  recommenderLink3: store.reviews.recommenderLink3,
});

const mapDispatchToProps: types.IDispatchProps = {
  clearAdviceData,
  clearRecommendersData,
  setRecommenderLink1: setReviewRecommenderLink1,
  setRecommenderLink2: setReviewRecommenderLink2,
  setRecommenderLink3: setReviewRecommenderLink3,
};

/**
 * Review box with an advice to the candidate.
 */
const BoxStepJ = (props: types.IProps) => {
  const link1Handler = (event: generalTypes.InputEvent) => inputHandler(
    event,
    props.setRecommenderLink1
  );
  const link2Handler = (event: generalTypes.InputEvent) => inputHandler(
    event,
    props.setRecommenderLink2
  );
  const link3Handler = (event: generalTypes.InputEvent) => inputHandler(
    event,
    props.setRecommenderLink3
  );

  const canProceed = !!props.recommenderLink1
    || !!props.recommenderLink2
    || !!props.recommenderLink3;

  const returnHandler = () => {
    props.clearAdviceData();
    props.clearRecommendersData();
    props.onBack();
  };

  const proceedIfAllowed = () => {
    if (canProceed) {
      props.onNextStep();
    }
  };

  return (
    <styled.BoxBaseWrapper>
      <styled.InputGroupWrapper>
        <styled.InputDescriptionWrapper>
          <styled.InputDescription>
            Кто ещё может дать отзыв о работе кандидата?
          </styled.InputDescription>
        </styled.InputDescriptionWrapper>

        <styled.InputWrapper>
          <styled.Input type='text' placeholder='Ссылка на LinkedIn/Email/Telegram' onChange={link1Handler} />
        </styled.InputWrapper>

        <styled.InputWrapper>
          <styled.Input type='text' placeholder='Ссылка на LinkedIn/Email/Telegram' onChange={link2Handler} />
        </styled.InputWrapper>

        <styled.InputWrapper>
          <styled.Input type='text' placeholder='Ссылка на LinkedIn/Email/Telegram' onChange={link3Handler} />
        </styled.InputWrapper>
      </styled.InputGroupWrapper>

      <styled.StepWrapper>
        <styled.StepText>12 / 12</styled.StepText>
      </styled.StepWrapper>

      <styled.ButtonGroupWrapper>
        <CustomButton isHollow isDisabled={false} onClick={returnHandler}>
          Назад
        </CustomButton>
        <CustomButton isDisabled={!canProceed} onClick={proceedIfAllowed}>
          Сохранить оценку
        </CustomButton>
      </styled.ButtonGroupWrapper>
    </styled.BoxBaseWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepJ);
