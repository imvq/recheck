import { connect } from 'react-redux';

import {
  AppState, setReviewFirstName, setReviewLastName, setReviewCompany,
  setReviewBounds
} from 'store';
import * as generalTypes from 'utils/typing/general';
import { inputHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import CustomSelect from 'components/shared/CustomSelect';

import * as types from './types';
import * as styled from '../../../shared/BoxBase';

const options: generalTypes.OptionType[] = [
  { key: 0, text: 'Я был его непосредственным руководителем' },
  { key: 1, text: 'Мы работали в одном отделе' },
  { key: 2, text: 'Мы работали в разных отделах, но часто сотрудничали' },
  { key: 3, text: 'Я был его непосредственным подчинённым' },
];

const mapStateToProps = (store: AppState): types.IStateProps => ({
  firstName: store.reviews.targetFirstName,
  lastName: store.reviews.targetLastName,
  company: store.reviews.workplace,
  bounds: store.reviews.bounds
});

const mapDispatchToProps: types.IDispatchProps = {
  setFirstName: setReviewFirstName,
  setLastName: setReviewLastName,
  setCompany: setReviewCompany,
  setBounds: setReviewBounds
};

/**
 * Review box with initial information.
 */
const BoxStepInitial = (props: types.IProps) => {
  const firstNameHandler = (event: generalTypes.InputEvent) => inputHandler(
    event,
    props.setFirstName
  );
  const lastNameHandler = (event: generalTypes.InputEvent) => inputHandler(
    event,
    props.setLastName
  );
  const companyHandler = (event: generalTypes.InputEvent) => inputHandler(event, props.setCompany);
  const boundsHandler = (option: generalTypes.OptionType) => props.setBounds(option.text);

  const canProceed = !!props.firstName && !!props.lastName && !!props.company && !!props.bounds;

  const proceedIfAllowed = () => {
    if (canProceed) {
      props.onNextStep();
    }
  };

  return (
    <styled.BoxBaseWrapper>
      <styled.TitleWrapper>
        <styled.Title>
          Оставьте отзыв о своем сотруднике и получите один бесплатный обзор кандидата
        </styled.Title>
      </styled.TitleWrapper>
      <styled.SubtitleWrapper>
        <styled.Subtitle>Ваш отзыв останется анонимным</styled.Subtitle>
      </styled.SubtitleWrapper>

      <styled.InputGroupWrapper>
        <styled.InputDescriptionWrapper>
          <styled.InputDescription>Имя</styled.InputDescription>
        </styled.InputDescriptionWrapper>
        <styled.Input type='text' onChange={firstNameHandler} />
      </styled.InputGroupWrapper>

      <styled.InputGroupWrapper>
        <styled.InputDescriptionWrapper>
          <styled.InputDescription>Фамилия</styled.InputDescription>
        </styled.InputDescriptionWrapper>
        <styled.Input type='text' onChange={lastNameHandler} />
      </styled.InputGroupWrapper>

      <styled.InputGroupWrapper>
        <styled.InputDescriptionWrapper>
          <styled.InputDescription>
            Компания, в которой вы вместе работали/работаете
          </styled.InputDescription>
        </styled.InputDescriptionWrapper>
        <styled.Input type='text' onChange={companyHandler} />
      </styled.InputGroupWrapper>

      <styled.InputGroupWrapper>
        <styled.InputDescriptionWrapper>
          <styled.InputDescription>Как вы связаны с сотрудником?</styled.InputDescription>
        </styled.InputDescriptionWrapper>
        <CustomSelect options={options} onNewOptionSelected={boundsHandler} />
      </styled.InputGroupWrapper>

      <styled.StepWrapper>
        <styled.StepText>1 / 12</styled.StepText>
      </styled.StepWrapper>

      <styled.ButtonGroupWrapper>
        <CustomButton isDisabled={!canProceed} onClick={proceedIfAllowed}>
          Продолжить
        </CustomButton>
      </styled.ButtonGroupWrapper>
    </styled.BoxBaseWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepInitial);
