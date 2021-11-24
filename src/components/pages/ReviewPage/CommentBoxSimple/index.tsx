import { memo, useState } from 'react';

import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from '../../../shared/BoxBase';

function CommentBoxSimple(props: types.IProps) {
  const [comment, setComment] = useState('');

  const onForwardHandler = () => (comment ? props.onStepForward(comment) : () => {});

  const ChildrenSection = (
    <styled.InputGroupWrapper>
      <styled.InputDescriptionWrapper>
        <styled.InputDescription>
          {props.children}
        </styled.InputDescription>
      </styled.InputDescriptionWrapper>
      <styled.TextArea value={comment} onChange={event => setComment(event.target.value)} />
    </styled.InputGroupWrapper>
  );

  const ButtonsSection = (
    <styled.ButtonGroupWrapper>
      <CustomButton isHollow isDisabled={false} onClick={props.onStepBack}>
        Назад
      </CustomButton>

      <CustomButton isDisabled={!comment} onClick={onForwardHandler}>
        Далее
      </CustomButton>
    </styled.ButtonGroupWrapper>
  );

  return (
    <styled.BoxBaseWrapper>
      {ChildrenSection}
      <styled.StepWrapper><span>{props.pageLabel}</span></styled.StepWrapper>
      {ButtonsSection}
    </styled.BoxBaseWrapper>
  );
}

export default memo(CommentBoxSimple);
