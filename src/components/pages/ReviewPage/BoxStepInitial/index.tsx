import { CustomSelect, CustomOption } from 'components/shared/Select';
import {
  Wrapper, TitleWrapper, Title, SubtitleWrapper, Subtitle,
  InputGroupWrapper, InputDescriptionWrapper, InputDescription, Input,
  Option
} from './styled';

export default () => (
  <Wrapper>
    <TitleWrapper>
      <Title>
        Оставьте отзыв о своем сотруднике и получите
        один бесплатный обзор кандидата
      </Title>
    </TitleWrapper>
    <SubtitleWrapper>
      <Subtitle>
        Ваш отзыв останется анонимным
      </Subtitle>
    </SubtitleWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Имя</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' />
    </InputGroupWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Фамилия</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' />
    </InputGroupWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Ссылка на LinkedIn</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' />
    </InputGroupWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Компания, в которой вы вместе работали/работаете</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' />
    </InputGroupWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Как вы связаны с сотрудником?</InputDescription>
      </InputDescriptionWrapper>
      <CustomSelect />
    </InputGroupWrapper>
  </Wrapper>
);
