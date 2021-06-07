import { Link } from 'react-router-dom';

import Logo from 'components/shared/Logo';
import MenuEntry from './MenuEntry';

import * as types from './types';
import * as styled from './styled';

export default (props: types.IProps) => (
  <styled.Wrapper className={props.className}>
    <styled.LogoWrapper><Link to='/'><Logo /></Link></styled.LogoWrapper>

    <MenuEntry text='Мои отзывы' isPressed={false} />
    <MenuEntry text='История поиска' isPressed={false} />
    <MenuEntry text='Обо мне' isPressed={false} />
    <MenuEntry text='Пополнить счёт' isPressed={false} />
    <MenuEntry text='Добавить место работы' isPressed={false} />
    <MenuEntry text='Новый поиск' isPressed={false} />
    <MenuEntry text='Выйти' isPressed={false} />
  </styled.Wrapper>
);
