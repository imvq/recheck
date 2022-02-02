import { memo, useState } from 'react';

import CustomButton from 'components/shared/CustomButton';

import * as styled from 'components/shared/BoxBase';

import MarkSelector from '../MarkSelector';

interface Props {
  labels: string[];
  pageLabel: string;
  onStepBack(): void;
  onStepForward(commentToPush: string, marktoPush: number): void;
  children: string;
}

function CommentBoxWithMark(props: Props) {
  const [comment, setComment] = useState('');
  const [mark, setMark] = useState<number | null>(null);

  const onForwardHandler = () => (comment && mark ? props.onStepForward(comment, mark) : () => {});

  const ChildrenSection = (
    <styled.MarkSelectorWrapper>
      <styled.MarkSelectorDescriptionWrapper>
        <styled.MarkSelectorDescription>
          {props.children}
        </styled.MarkSelectorDescription>
      </styled.MarkSelectorDescriptionWrapper>
      <MarkSelector labels={props.labels} setMark={setMark} />
    </styled.MarkSelectorWrapper>
  );

  const CommentSection = (
    <styled.InputGroupWrapper>
      <styled.CommentArea
        placeholder='Прокомментируйте свой ответ'
        onChange={event => setComment(event.target.value)}
      />
    </styled.InputGroupWrapper>
  );

  const ButtonsSection = (
    <styled.ButtonGroupWrapper>
      <CustomButton isHollow isDisabled={false} onClick={props.onStepBack}>
        Назад
      </CustomButton>

      <CustomButton isDisabled={!comment || !mark} onClick={onForwardHandler}>
        Далее
      </CustomButton>
    </styled.ButtonGroupWrapper>
  );

  return (
    <styled.BoxBaseWrapper>
      {ChildrenSection}
      {CommentSection}
      <styled.StepWrapper><span>{props.pageLabel}</span></styled.StepWrapper>
      {ButtonsSection}
    </styled.BoxBaseWrapper>
  );
}

export default memo(CommentBoxWithMark);
