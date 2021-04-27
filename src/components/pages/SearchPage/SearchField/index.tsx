import { Wrapper, Input, AdapdetMagnifier } from './styled';

export default () => (
  <Wrapper>
    <Input
      type='text'
      placeholder='Введите название компании или имя и фамилию сотрудника, который работал с вами:'
    />
    <AdapdetMagnifier />
  </Wrapper>
);
