import { Link as ScrollLink } from 'react-scroll';

import { ReactComponent as ArrowRightSvg } from 'assets/images/shared/Pagination/ArrowRight.svg';
import { ReactComponent as ArrowLeftSvg } from 'assets/images/shared/Pagination/ArrowLeft.svg';
import { PaginationDirection } from 'commons/utils/enums';

import * as types from './types';
import * as styled from './styled';

const isArrowRight = (page: number | PaginationDirection) => page === PaginationDirection.Next;
const isArrowLeft = (page: number | PaginationDirection) => page === PaginationDirection.Prev;

export default (props: types.IProps) => {
  if (isArrowLeft(props.page)) {
    return (
      <ScrollLink to='ProfileTitle' smooth duration={300}>
        <styled.ArrowLeftWrapper isEnabled={props.isEnabled}>
          <ArrowLeftSvg onClick={() => props.callback(props.page)} />
        </styled.ArrowLeftWrapper>
      </ScrollLink>
    );
  }

  if (isArrowRight(props.page)) {
    return (
      <ScrollLink to='ProfileTitle' smooth duration={300}>
        <styled.ArrowRightWrapper isEnabled={props.isEnabled}>
          <ArrowRightSvg onClick={() => props.callback(props.page)} />
        </styled.ArrowRightWrapper>
      </ScrollLink>
    );
  }

  return (
    <ScrollLink to='ProfileTitle' smooth duration={300}>
      <styled.NumberWrapper
        type='button'
        onClick={() => props.callback(props.page)}
        disabled={!props.isEnabled}
        isCurrent={props.isCurrent}
      >
        {props.page}
      </styled.NumberWrapper>
    </ScrollLink>
  );
};
