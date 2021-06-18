import { useState } from 'react';
import { connect } from 'react-redux';

import { AppState, createReview } from 'store';
import BoxStepInitial from './BoxStepInitial';
import BoxStepFinal from './BoxStepFinal';

import CommentBoxSimple from './CommentBoxSimple';
import * as boxSimpleMapping from './CommentBoxSimple/mapping';

import ComponentBoxWithMark from './CommentBoxWithMark';
import * as boxWithMarkMapping from './CommentBoxWithMark/mapping';
import * as boxWithMarkLabels from './CommentBoxWithMark/labels';

import * as types from './types';
import * as styled from './styled';

const mapSateToProps = (store: AppState): types.IStateProps => ({
  currentProfileInfo: store.profile.currentProfileInfo,
  reviewData: { ...store.reviews }
});

const mapDispatchToProps: types.IDispatchProps = {
  createReview
};

const BoxStepA = CommentBoxSimple(
  boxSimpleMapping.mapStepAStateToProps,
  boxSimpleMapping.mapStepADispatchToProps
);

const BoxStepB = CommentBoxSimple(
  boxSimpleMapping.mapStepBStateToProps,
  boxSimpleMapping.mapStepBDispatchToProps
);

const BoxStepC = CommentBoxSimple(
  boxSimpleMapping.mapStepCStateToProps,
  boxSimpleMapping.mapStepCDispatchToProps
);

const BoxStepD = CommentBoxSimple(
  boxSimpleMapping.mapStepDStateToProps,
  boxSimpleMapping.mapStepDDispatchToProps
);

const BoxStepE = ComponentBoxWithMark(
  boxWithMarkMapping.mapStepEStateToProps,
  boxWithMarkMapping.mapStepEDispatchToProps
);

const BoxStepF = ComponentBoxWithMark(
  boxWithMarkMapping.mapStepFStateToProps,
  boxWithMarkMapping.mapStepFDispatchToProps
);

const BoxStepG = ComponentBoxWithMark(
  boxWithMarkMapping.mapStepGStateToProps,
  boxWithMarkMapping.mapStepGDispatchToProps
);

const BoxStepH = ComponentBoxWithMark(
  boxWithMarkMapping.mapStepHStateToProps,
  boxWithMarkMapping.mapStepHDispatchToProps
);

const BoxStepI = ComponentBoxWithMark(
  boxWithMarkMapping.mapStepIStateToProps,
  boxWithMarkMapping.mapStepIDispatchToProps
);

const BoxStepJ = CommentBoxSimple(
  boxSimpleMapping.mapStepJStateToProps,
  boxSimpleMapping.mapStepJDispatchToProps
);

/**
 * Page in charge of adding a review.
 */
const ReviewPage = (props: types.IProps) => {
  const [step, setStep] = useState(0);

  const proceed = () => setStep(step + 1);
  const comeback = () => setStep(step - 1);
  const finalize = () => props.createReview({
    authorId: props.currentProfileInfo.currentId,
    ...props.reviewData
  });

  const boxes = [
    <BoxStepInitial onNextStep={proceed} />,
    <BoxStepA page={2} onNextStep={proceed} onBack={comeback}>
      Какие задачи выполнял кандидат?
    </BoxStepA>,
    <BoxStepB page={3} onNextStep={proceed} onBack={comeback}>
      Опишите сильные стороны кандидата в работе
    </BoxStepB>,
    <BoxStepC page={4} onNextStep={proceed} onBack={comeback}>
      Какие знания и навыки можно улучшить кандидату, чтобы работать лучше?
    </BoxStepC>,
    <BoxStepD page={5} onNextStep={proceed} onBack={comeback}>
      Расскажите про результаты работы, которых достиг кандидат
    </BoxStepD>,
    <BoxStepE page={6} onNextStep={proceed} onBack={comeback} labels={boxWithMarkLabels.stepE}>
      Оцените уровень знаний для должности, на которой был кандидат
    </BoxStepE>,
    <BoxStepF page={7} onNextStep={proceed} onBack={comeback} labels={boxWithMarkLabels.stepF}>
      Оцените мотивированность и проктивность кандидата в работе
    </BoxStepF>,
    <BoxStepG page={8} onNextStep={proceed} onBack={comeback} labels={boxWithMarkLabels.stepG}>
      Вы бы взяли/рекомендовали этого кандидата на аналогичную работу?
    </BoxStepG>,
    <BoxStepH page={9} onNextStep={proceed} onBack={comeback} labels={boxWithMarkLabels.stepH}>
      Насколько качественно кандидат выполняет свою работу?
    </BoxStepH>,
    <BoxStepI page={10} onNextStep={proceed} onBack={comeback} labels={boxWithMarkLabels.stepI}>
      Может ли кандидат занимать руководящие должности?
    </BoxStepI>,
    <BoxStepJ page={11} onNextStep={proceed} onBack={comeback}>
      Какой совет вы можете дать будущему работодателю кандидата?
    </BoxStepJ>,
    <BoxStepFinal onNextStep={finalize} onBack={comeback} />
  ];

  return (
    <styled.Wrapper>
      <styled.AdaptedHeader />
      <styled.ContentWrapper>
        {boxes[step]}
      </styled.ContentWrapper>
      <styled.AdaptedFooter />
    </styled.Wrapper>
  );
};

export default connect(mapSateToProps, mapDispatchToProps)(ReviewPage);
