import * as types from './types';
import * as styled from '../styled';

export default (props: types.IProps) => {
  return props.isFirstSearch ? null
    : (
      <styled.SpanWrapper>
        <styled.Span>
          Поиск не дал результатов
        </styled.Span>
      </styled.SpanWrapper>
    );
};
