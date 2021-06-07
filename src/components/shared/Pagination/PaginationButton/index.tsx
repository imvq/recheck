import { ReactComponent as ArrowRightSvg } from 'assets/images/shared/Pagination/ArrowRight.svg';
import { ReactComponent as ArrowLeftSvg } from 'assets/images/shared/Pagination/ArrowLeft.svg';
import { PaginationDirection } from 'utils/enums';
import { IProps } from './types';
import { Wrapper, ArrowLeftWrapper, ArrowRightWrapper } from './styled';

const isArrowRight = (page: number | PaginationDirection) => page === PaginationDirection.Next;
const isArrowLeft = (page: number | PaginationDirection) => page === PaginationDirection.Prev;

export default (props: IProps) => {
  const ArrowLeft = () => (
    <ArrowLeftWrapper isEnabled={props.isEnabled}>
      <ArrowLeftSvg onClick={() => props.callback(props.page)} />
    </ArrowLeftWrapper>
  );

  const ArrowRight = () => (
    <ArrowRightWrapper isEnabled={props.isEnabled}>
      <ArrowRightSvg onClick={() => props.callback(props.page)} />
    </ArrowRightWrapper>
  );

  if (isArrowLeft(props.page)) {
    return <ArrowLeft />;
  }

  if (isArrowRight(props.page)) {
    return <ArrowRight />;
  }

  return (
    <Wrapper
      type='button'
      onClick={() => props.callback(props.page)}
      disabled={!props.isEnabled}
      isCurrent={props.isCurrent}
    >
      {props.page}
    </Wrapper>
  );
};
