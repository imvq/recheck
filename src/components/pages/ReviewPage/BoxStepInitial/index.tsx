import { useState } from 'react';

import { Nullable, OptionType } from 'utils/types.common';
import CustomSelect from 'components/shared/Select';
import {
  Wrapper, TitleWrapper, Title, SubtitleWrapper, Subtitle,
  InputGroupWrapper, InputDescriptionWrapper, InputDescription, Input
} from './styled';

const options: OptionType[] = [
  { key: 0, text: 'Я был его непосредственным руководителем' },
  { key: 1, text: 'Мы работали в одном отделе' },
  { key: 2, text: 'Мы работали в разных отделах, но часто сотрудничали' },
  { key: 3, text: 'Я был его непосредственным подчинённым' },
];

export default () => {
  const [bounds, setBounds] = useState<Nullable<OptionType>>(null);

  return (
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
        <CustomSelect options={options} onNewOptionSelected={setBounds} />
      </InputGroupWrapper>
    </Wrapper>
  );
};
