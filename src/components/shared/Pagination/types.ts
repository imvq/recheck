export interface IOwnProps {
  nPages: number;
  onPrevClick: () => void;
  onPageClick: (currentPage: number) => void;
  onNextClick: () => void;
}

export type IProps = IOwnProps;
