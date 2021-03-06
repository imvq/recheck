import { memo, useState } from 'react';

import { paginationDirections } from 'commons/types/unions';
import PaginationButton from './PaginationButton';

import * as types from './types';
import * as styled from './styled';

function Pagination(props: types.IProps) {
  const pageButtons = [] as JSX.Element[];
  const [currentPage, setCurrentPage] = useState(1);

  const onPrevExtended = () => {
    setCurrentPage(currentPage - 1);
    props.onPrevClick();
  };

  const onPageExtended = (page: number) => {
    setCurrentPage(page);
    props.onPageClick(page);
  };

  const onNextExtended = () => {
    setCurrentPage(currentPage + 1);
    props.onNextClick();
  };

  pageButtons.push(
    <styled.ButtonWrapper key={paginationDirections.Prev}>
      <PaginationButton
        page={paginationDirections.Prev}
        callback={onPrevExtended}
        isEnabled={currentPage > 1}
        isCurrent={false}
      />
    </styled.ButtonWrapper>
  );

  for (let i = 1; i <= props.nPages; ++i) {
    pageButtons.push(
      <styled.ButtonWrapper key={i}>
        <PaginationButton
          page={i}
          callback={onPageExtended}
          isCurrent={i === currentPage}
          isEnabled={i !== currentPage}
        />
      </styled.ButtonWrapper>
    );
  }

  pageButtons.push(
    <styled.ButtonWrapper key={paginationDirections.Next}>
      <PaginationButton
        page={paginationDirections.Next}
        callback={onNextExtended}
        isEnabled={currentPage < props.nPages}
        isCurrent={false}
      />
    </styled.ButtonWrapper>
  );

  return <styled.Wrapper>{pageButtons}</styled.Wrapper>;
}

export default memo(Pagination);
