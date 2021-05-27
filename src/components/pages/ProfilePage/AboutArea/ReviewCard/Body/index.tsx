import { IProps } from './types';
import { Wrapper, EntryWrapper, QuestionTitle, Answer } from './styled';

const questions = [
  'Какие задачи выполнял кандидат?',
  'Опишите сильные стороны кандидата',
  'Какие компетенции и навыки необходимо улучшить',
  'Какие цели были поставлены перед кандидатом на работе? Были ли они выполены?',
  'Как вы оцениваете уровень знаний и качество работы для должности, на которой был кадидат?',
  'Оцените проактивность кандидата в работе.',
  'Вы бы взяли этого кандиидата на аналогичную работу ещё раз?',
  'Способен ли кандидат работать автономно, объективно оценивая свои возможност и необходимое время?',
  'Как вы оцениваете уровень знаний и качество работы для должности, на которой был кандидат?',
  'Кто ещё может дать отзыв о работе кандидата?'
];

export default (props: IProps) => (
  <Wrapper>
    {questions.map((question, index) => (
      <EntryWrapper key={question}>
        <QuestionTitle>{question}</QuestionTitle>
        <Answer isHighlighted={index === questions.length - 1}>
          {props.reviewCardData.questions[index]}
        </Answer>
      </EntryWrapper>
    ))}
  </Wrapper>
);
