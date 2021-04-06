import {
  Wrapper, TitleWrapper, Title, SubtitleWrapper, Subtitle,
  InputGroupWrapper, InputDescriptionWrapper, InputDescription, Input,
  Select, Option
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
      <Select>
        <Option>Я был его непосредственным начальником</Option>
        <Option>Мы работали в одном отделе</Option>
        <Option>Мы работали в разных отделах, но часто сотрудничали</Option>
        <Option>Я был его непосредственным подчинённым</Option>
      </Select>
    </InputGroupWrapper>
  </Wrapper>
);
