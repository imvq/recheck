import { memo } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { ReactComponent as ArrowRightSvg } from 'assets/images/shared/Pagination/ArrowRight.svg';
import { ReactComponent as ArrowLeftSvg } from 'assets/images/shared/Pagination/ArrowLeft.svg';
import { PaginationDirection, paginationDirections } from 'commons/types/unions';

import * as types from './types';
import * as styled from './styled';

const isArrowPrev = (page: number | PaginationDirection) => page === paginationDirections.Prev;
const isArrowNext = (page: number | PaginationDirection) => page === paginationDirections.Next;

function PaginationButton(props: types.IProps) {
  if (isArrowPrev(props.page)) {
    return (
      <ScrollLink to='ProfileTitle' smooth duration={300}>
        <styled.ArrowLeftWrapper isEnabled={props.isEnabled}>
          <ArrowLeftSvg onClick={() => props.callback(props.page)} />
        </styled.ArrowLeftWrapper>
      </ScrollLink>
    );
  }

  if (isArrowNext(props.page)) {
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
}

export default memo(PaginationButton);
