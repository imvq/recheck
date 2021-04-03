import { useHistory } from 'react-router-dom';

import {
  Wrapper, Form, InputLineWrapper, Input, Button, ButtonWrapper
} from './styled';

/**
 * Page with single form to scrape linkedIn profile link.
 */
export default () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Form>
        <span>Введите ссылку на Ваш публичный профиль LinkedIn</span>
        <span>Ссылка должна быть в форме</span>
        <span>https://www.linkedin.com/in/профиль</span>
        <InputLineWrapper>
          <Input type='text' />
          <ButtonWrapper>
            {/* TODO: Scraping. */}
            <Button onClick={() => history.push('/profile')}>
              Подтвердить
            </Button>
          </ButtonWrapper>
        </InputLineWrapper>
        <span>
          Предоставляя ссылку, Вы подтверждаете, что являетесь
          влаельцем данной страницы.
        </span>
      </Form>
    </Wrapper>
  );
};
