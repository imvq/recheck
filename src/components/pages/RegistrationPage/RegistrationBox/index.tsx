import {
  BoxBaseWrapper, TitleWrapper, Title, SubtitleWrapper, Subtitle,
  InputGroupWrapper, InputDescriptionWrapper, InputDescription, Input,
  ButtonGroupWrapper
} from '../../../shared/BoxBase';

export default () => (
  <BoxBaseWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Рабочий email:</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' onChange={() => {}} />
    </InputGroupWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Сайт компании, где вы работаете:</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' onChange={() => {}} />
    </InputGroupWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Название компании, где вы работаете:</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' onChange={() => {}} />
    </InputGroupWrapper>
    <InputGroupWrapper>
      <InputDescriptionWrapper>
        <InputDescription>Ваша позиция:</InputDescription>
      </InputDescriptionWrapper>
      <Input type='text' onChange={() => {}} />
    </InputGroupWrapper>
  </BoxBaseWrapper>
);
