import { connect } from 'react-redux';

import * as generalTypes from 'utils/typing/general';
import { textAreaHandler } from 'utils/functions';
import CustomButton from 'components/shared/CustomButton';

import * as types from './types';
import * as styled from '../../../shared/BoxBase';

/**
 * Higher order component for generating simple comment review box.
 *
 * @param mapStateToProps State mapper function
 * @param mapDispatchToProps Dispatch mapper object
 * @returns Redux-connected component
 */
export default function CommentBoxSimple(
  mapStateToProps: types.IStatePropsMapped,
  mapDispatchToProps: types.IDispatchProps
) {
  const Wrapped = (props: types.IProps) => {
    function valueHandler(event: generalTypes.ITextAreaEvent) {
      textAreaHandler(event, props.setCurrent);
    }

    const canProceed = !!props.comment;

    function returnHandler() {
      props.clearPrevious();
      props.clearPrevious();
      props.onBack();
    }

    function proceedIfAllowed() {
      if (canProceed) {
        props.onNextStep();
      }
    }

    return (
      <styled.BoxBaseWrapper>

        <styled.InputGroupWrapper>
          <styled.InputDescriptionWrapper>
            <styled.InputDescription>
              {props.children}
            </styled.InputDescription>
          </styled.InputDescriptionWrapper>
          <styled.TextArea onChange={valueHandler} />
        </styled.InputGroupWrapper>

        <styled.StepWrapper><span>{`${props.page} / 3`}</span></styled.StepWrapper>

        <styled.ButtonGroupWrapper>
          <CustomButton isHollow isDisabled={false} onClick={returnHandler}>
            Назад
          </CustomButton>

          <CustomButton isDisabled={!canProceed} onClick={proceedIfAllowed}>
            Далее
          </CustomButton>
        </styled.ButtonGroupWrapper>

      </styled.BoxBaseWrapper>
    );
  };

  return connect(mapStateToProps, mapDispatchToProps)(Wrapped);
}
