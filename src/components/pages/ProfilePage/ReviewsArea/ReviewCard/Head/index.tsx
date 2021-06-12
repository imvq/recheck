import { IProps } from './types';
import { Wrapper, Menu, MenuContent, MenuContentSpansWrapper, MenuContentSpan } from './styled';

export default (props: IProps) => (
  <Wrapper>
    <Menu>
      <MenuContent>
        <MenuContentSpansWrapper>
          <MenuContentSpan dimmed>
            Место работы:&nbsp;&nbsp;
            <MenuContentSpan>{props.reviewCardData.workplace}</MenuContentSpan>
          </MenuContentSpan>
        </MenuContentSpansWrapper>
      </MenuContent>
    </Menu>
  </Wrapper>
);
