import CustomButton from 'components/shared/CustomButton';
import { IProps } from './types';
import { Wrapper, TopBar, PhotoWrapper, BodyWrapper, Span, ButtonWrapper } from './styled';

export default (props: IProps) => (
  <Wrapper>
    <TopBar />
    <BodyWrapper>
      <PhotoWrapper src={props.userData.photoUrl || ''} />
      <Span isEnlarged>{props.userData.name}</Span>
      <Span isDimmed>{`${props.userData.position} — ${props.userData.company.name}`}</Span>
      <ButtonWrapper>
        <CustomButton isDisabled={false} isHollow height='2.2rem' color='black'>
          Посмотреть
        </CustomButton>
      </ButtonWrapper>
    </BodyWrapper>
  </Wrapper>
);
