import { memo } from 'react';
import { connect } from 'react-redux';

import { ITextAreaEvent } from 'commons/types/general';

import CustomButton from 'components/shared/CustomButton';

import MarkSelector from '../MarkSelector';

import * as misc from '../misc';
import * as types from './types';
import * as styled from '../../../shared/BoxBase';

/**
 * Higher order component for generating comment review box with mark selector.
 */
export default function CommentBoxWithMark(
  mapStateToProps: types.IStatePropsMapped,
  mapDispatchToProps: types.IDispatchProps
) {
  function Wrapped(props: types.IProps) {
    function valueHandler(event: ITextAreaEvent) {
      misc.textAreaHandler(event, props.setCurrentComment);
    }

    function returnHandler() {
      props.clearPrevious();
      props.clearCurrent();
      props.onBack();
    }

    function proceedIfAllowed() {
      if (props.mark) {
        props.onNextStep();
      }
    }

    const ChildrenSection = (
      <styled.MarkSelectorWrapper>
        <styled.MarkSelectorDescriptionWrapper>
          <styled.MarkSelectorDescription>
            {props.children}
          </styled.MarkSelectorDescription>
        </styled.MarkSelectorDescriptionWrapper>
        <MarkSelector labels={props.labels} setMark={props.setCurrentMark} />
      </styled.MarkSelectorWrapper>
    );

    const CommentSection = (
      <styled.InputGroupWrapper>
        <styled.CommentArea placeholder='Прокомментируйте свой ответ' onChange={valueHandler} />
      </styled.InputGroupWrapper>
    );

    const ButtonsSection = (
      <styled.ButtonGroupWrapper>
        <CustomButton isHollow isDisabled={false} onClick={returnHandler}>
          Назад
        </CustomButton>

        <CustomButton isDisabled={!props.mark} onClick={proceedIfAllowed}>
          Далее
        </CustomButton>
      </styled.ButtonGroupWrapper>
    );

    return (
      <styled.BoxBaseWrapper>
        {ChildrenSection}
        {CommentSection}
        <styled.StepWrapper><span>{`${props.page} / 3`}</span></styled.StepWrapper>
        {ButtonsSection}
      </styled.BoxBaseWrapper>
    );
  }

  return connect(mapStateToProps, mapDispatchToProps)(memo(Wrapped));
}
