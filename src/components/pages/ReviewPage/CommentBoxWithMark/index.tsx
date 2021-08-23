import { memo } from 'react';
import { connect } from 'react-redux';

import * as generalTypes from 'commons/types/general';

import { textAreaHandler } from 'commons/utils/functions';

import CustomButton from 'components/shared/CustomButton';

import MarkSelector from '../MarkSelector';

import * as types from './types';
import * as styled from '../../../shared/BoxBase';

/**
 * Higher order component for generating comment review box with mark selector.
 *
 * @param mapStateToProps State mapper function
 * @param mapDispatchToProps Dispatch mapper object
 * @returns Redux-connected component
 */
export default function CommentBoxWithMark(
  mapStateToProps: types.IStatePropsMapped,
  mapDispatchToProps: types.IDispatchProps
) {
  function Wrapped(props: types.IProps) {
    function valueHandler(event: generalTypes.ITextAreaEvent) {
      textAreaHandler(event, props.setCurrentComment);
    }

    function returnHandler() {
      props.clearPrevious();
      props.clearPrevious();
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
