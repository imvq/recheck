import { connect } from 'react-redux';

import {
  AppState, setReviewFirstName, setReviewLastName, setReviewCompany,
  setReviewBounds
} from 'store';
import { InputEvent, OptionType } from 'utils/types.common';
import { inputHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';
import CustomSelect from 'components/shared/CustomSelect';
import { IProps, IStateProps, IDispatchProps } from './types';
import {
  BoxBaseWrapper, TitleWrapper, Title, SubtitleWrapper, Subtitle,
  InputGroupWrapper, InputDescriptionWrapper, InputDescription, Input,
  ButtonGroupWrapper
} from '../../../shared/BoxBase';

const options: OptionType[] = [
  { key: 0, text: 'Я был его непосредственным руководителем' },
  { key: 1, text: 'Мы работали в одном отделе' },
  { key: 2, text: 'Мы работали в разных отделах, но часто сотрудничали' },
  { key: 3, text: 'Я был его непосредственным подчинённым' },
];

const mapStateToProps = (store: AppState): IStateProps => ({
  firstName: store.reviews.firstName,
  lastName: store.reviews.lastName,
  company: store.reviews.companyName,
  bounds: store.reviews.bounds
});

const mapDispatchToProps: IDispatchProps = {
  setFirstName: setReviewFirstName,
  setLastName: setReviewLastName,
  setCompany: setReviewCompany,
  setBounds: setReviewBounds
};

/**
 * Review box with initial information.
 */
const BoxStepInitial = (props: IProps) => {
  const firstNameHandler = (event: InputEvent) => inputHandler(event, props.setFirstName);
  const lastNameHandler = (event: InputEvent) => inputHandler(event, props.setLastName);
  const companyHandler = (event: InputEvent) => inputHandler(event, props.setCompany);
  const boundsHandler = (option: OptionType) => props.setBounds(option.text);

  const canProceed = !!props.firstName && !!props.lastName && !!props.company && !!props.bounds;

  const proceedIfAllowed = () => {
    if (canProceed) {
      props.onNextStep();
    }
  };

  return (
    <BoxBaseWrapper>
      <TitleWrapper>
        <Title>Оставьте отзыв о своем сотруднике и получите один бесплатный обзор кандидата</Title>
      </TitleWrapper>
      <SubtitleWrapper>
        <Subtitle>Ваш отзыв останется анонимным</Subtitle>
      </SubtitleWrapper>
      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Имя</InputDescription>
        </InputDescriptionWrapper>
        <Input type='text' onChange={firstNameHandler} />
      </InputGroupWrapper>
      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Фамилия</InputDescription>
        </InputDescriptionWrapper>
        <Input type='text' onChange={lastNameHandler} />
      </InputGroupWrapper>
      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Компания, в которой вы вместе работали/работаете</InputDescription>
        </InputDescriptionWrapper>
        <Input type='text' onChange={companyHandler} />
      </InputGroupWrapper>
      <InputGroupWrapper>
        <InputDescriptionWrapper>
          <InputDescription>Как вы связаны с сотрудником?</InputDescription>
        </InputDescriptionWrapper>
        <CustomSelect options={options} onNewOptionSelected={boundsHandler} />
      </InputGroupWrapper>
      <ButtonGroupWrapper>
        <CustomButton isDisabled={!canProceed} onClick={proceedIfAllowed}>
          Продолжить
        </CustomButton>
      </ButtonGroupWrapper>
    </BoxBaseWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BoxStepInitial);
