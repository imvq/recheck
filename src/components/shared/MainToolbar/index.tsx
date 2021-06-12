import { Link } from 'react-router-dom';

import Logo from 'components/shared/Logo';
import MenuEntry from './MenuEntry';

import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => (
  <styled.Wrapper className={props.className}>
    <styled.LogoWrapper><Link to='/'><Logo /></Link></styled.LogoWrapper>

    <styled.ButtonsWrapper>
      <styled.ButtonWrapper><MenuEntry text='Мои отзывы' isPressed={false} /></styled.ButtonWrapper>

      <styled.ButtonWrapper><MenuEntry text='История поиска' isPressed={false} /></styled.ButtonWrapper>

      <styled.ButtonWrapper><MenuEntry text='Обо мне' isPressed={false} /></styled.ButtonWrapper>

      <styled.ButtonWrapper><MenuEntry text='Пополнить счёт' isPressed={false} /></styled.ButtonWrapper>

      <styled.ButtonWrapper><MenuEntry text='Добавить место работы' isPressed={false} /></styled.ButtonWrapper>

      <styled.ButtonWrapper><MenuEntry text='Новый поиск' isPressed /></styled.ButtonWrapper>

      <styled.ButtonWrapper><MenuEntry text='Выйти' isPressed={false} /></styled.ButtonWrapper>
    </styled.ButtonsWrapper>
  </styled.Wrapper>
);
