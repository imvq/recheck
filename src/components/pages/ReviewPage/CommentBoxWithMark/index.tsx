import { connect } from 'react-redux';

import * as generalTypes from 'utils/typing/general';
import { textAreaHandler } from 'utils/functions';
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
  const Wrapped = (props: types.IProps) => {
    function valueHandler(event: generalTypes.TextAreaEvent) {
      textAreaHandler(event, props.setCurrentComment);
    }

    const canProceed = !!props.mark;

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

        <styled.MarkSelectorWrapper>
          <styled.MarkSelectorDescriptionWrapper>
            <styled.MarkSelectorDescription>
              Оцените уровень знаний для должности, на которой был кандидат
            </styled.MarkSelectorDescription>
          </styled.MarkSelectorDescriptionWrapper>
          <MarkSelector labels={props.labels} setMark={props.setCurrentMark} />
        </styled.MarkSelectorWrapper>

        <styled.InputGroupWrapper>
          <styled.CommentArea placeholder='Прокомментируйте свой ответ' onChange={valueHandler} />
        </styled.InputGroupWrapper>
        <styled.StepWrapper><span>6 / 12</span></styled.StepWrapper>

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
