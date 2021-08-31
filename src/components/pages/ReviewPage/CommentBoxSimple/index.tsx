import { memo } from 'react';
import { connect } from 'react-redux';

import { ITextAreaEvent } from 'commons/types/general';

import CustomButton from 'components/shared/CustomButton';

import * as misc from '../misc';
import * as types from './types';
import * as styled from '../../../shared/BoxBase';

/**
 * Higher order component for generating simple comment review box.
 */
export default function CommentBoxSimple(
  mapStateToProps: types.IStatePropsMapped,
  mapDispatchToProps: types.IDispatchProps
) {
  function Wrapped(props: types.IProps) {
    function valueHandler(event: ITextAreaEvent) {
      misc.textAreaHandler(event, props.setCurrent);
    }

    const canProceed = !!props.comment;

    function returnHandler() {
      props.clearPrevious?.();
      props.clearCurrent();
      props.onBack();
    }

    function proceedIfAllowed() {
      if (canProceed) {
        props.onNextStep();
      }
    }

    const ChildrenSection = (
      <styled.InputGroupWrapper>
        <styled.InputDescriptionWrapper>
          <styled.InputDescription>
            {props.children}
          </styled.InputDescription>
        </styled.InputDescriptionWrapper>
        <styled.TextArea onChange={valueHandler} />
      </styled.InputGroupWrapper>
    );

    const ButtonsSection = (
      <styled.ButtonGroupWrapper>
        <CustomButton isHollow isDisabled={false} onClick={returnHandler}>
          Назад
        </CustomButton>

        <CustomButton isDisabled={!canProceed} onClick={proceedIfAllowed}>
          Далее
        </CustomButton>
      </styled.ButtonGroupWrapper>
    );

    return (
      <styled.BoxBaseWrapper>
        {ChildrenSection}
        <styled.StepWrapper><span>{`${props.page} / 3`}</span></styled.StepWrapper>
        {ButtonsSection}
      </styled.BoxBaseWrapper>
    );
  }

  return connect(mapStateToProps, mapDispatchToProps)(memo(Wrapped));
}
