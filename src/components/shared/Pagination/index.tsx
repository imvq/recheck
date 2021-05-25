import { useState } from 'react';

import { PaginationDirection } from 'utils/enums';
import { IProps } from './types';
import { Wrapper, ButtonWrapper } from './styled';
import PaginationButton from './PaginationButton';

/**
 * Pagination.
 */
export default (props: IProps) => {
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
    <ButtonWrapper key={PaginationDirection.Prev}>
      <PaginationButton
        page={PaginationDirection.Prev}
        callback={onPrevExtended}
        isEnabled={currentPage > 1}
        isCurrent={false}
      />
    </ButtonWrapper>
  );

  for (let i = 1; i <= props.nPages; ++i) {
    pageButtons.push(
      <ButtonWrapper key={i}>
        <PaginationButton
          page={i}
          callback={onPageExtended}
          isCurrent={i === currentPage}
          isEnabled
        />
      </ButtonWrapper>
    );
  }

  pageButtons.push(
    <ButtonWrapper key={PaginationDirection.Next}>
      <PaginationButton
        page={PaginationDirection.Next}
        callback={onNextExtended}
        isEnabled={currentPage < props.nPages}
        isCurrent={false}
      />
    </ButtonWrapper>
  );

  return <Wrapper>{pageButtons}</Wrapper>;
};
