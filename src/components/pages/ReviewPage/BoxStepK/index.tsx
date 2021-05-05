import { connect } from 'react-redux';

import {
  AppState, clearAdviceData, clearRecommendersData,
  setReviewRecommenderLink1, setReviewRecommenderLink2, setReviewRecommenderLink3
} from 'store';
import * as GeneralTypes from 'utils/typing/general';
import { inputHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  BoxBaseWrapper, ButtonGroupWrapper, InputWrapper,
  InputDescription, InputDescriptionWrapper, Input,
  InputGroupWrapper
} from '../../../shared/BoxBase';

const mapStateToProps = (store: AppState): IStateProps => ({
  recommenderLink1: store.reviews.recommenderLink1,
  recommenderLink2: store.reviews.recommenderLink2,
  recommenderLink3: store.reviews.recommenderLink3,
});

const mapDispatchToProps: IDispatchProps = {
  clearAdviceData,
  clearRecommendersData,
  setRecommenderLink1: setReviewRecommenderLink1,
  setRecommenderLink2: setReviewRecommenderLink2,
  setRecommenderLink3: setReviewRecommenderLink3,
};

/**
 * Review box with an advice to the candidate.
 */
const BoxStepJ = (props: IProps) => {
  const link1Handler = (event: GeneralTypes.InputEvent) => inputHandler(
    event,
    props.setRecommenderLink1
  );
  const link2Handler = (event: GeneralTypes.InputEvent) => inputHandler(
    event,
    props.setRecommenderLink2
  );
  const link3Handler = (event: GeneralTypes.InputEvent) => inputHandler(
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
    <BoxBaseWrapper>
      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Кто ещё может дать отзыв о работе кандидата?</InputDescription>
        </InputDescriptionWrapper>
        <InputWrapper>
          <Input type='text' placeholder='Ссылка на LinkedIn/Email/Telegram' onChange={link1Handler} />
        </InputWrapper>
        <InputWrapper>
          <Input type='text' placeholder='Ссылка на LinkedIn/Email/Telegram' onChange={link2Handler} />
        </InputWrapper>
        <InputWrapper>
          <Input type='text' placeholder='Ссылка на LinkedIn/Email/Telegram' onChange={link3Handler} />
        </InputWrapper>
      </InputGroupWrapper>
      <ButtonGroupWrapper>
        <CustomButton isHollow isDisabled={false} onClick={returnHandler}>
          Назад
        </CustomButton>
        <CustomButton isDisabled={!canProceed} onClick={proceedIfAllowed}>
          Сохранить оценку
        </CustomButton>
      </ButtonGroupWrapper>
    </BoxBaseWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepJ);
