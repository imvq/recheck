import { IProps } from './types';
import Bar from './Bar';
import {
  Wrapper, Menu, MenuContent, MenuContentSpansWrapper, MenuContentSpan,
  ProfilePictureWrapper, ProfilePicture
} from './styled';

export default (props: IProps) => (
  <Wrapper>
    <Menu>
      <Bar reviewCardData={props.reviewCardData} isAnonymous={props.isAnonymous} />
      <MenuContent>
        <MenuContentSpansWrapper>
          <MenuContentSpan dimmed>
            Должность:&nbsp;&nbsp;
            <MenuContentSpan>{props.reviewCardData.position}</MenuContentSpan>
          </MenuContentSpan>
          <MenuContentSpan dimmed>
            Место работы:&nbsp;&nbsp;
            <MenuContentSpan>{props.reviewCardData.company}</MenuContentSpan>
          </MenuContentSpan>
          <MenuContentSpan dimmed>
            Опыт:&nbsp;&nbsp;
            <MenuContentSpan>{props.reviewCardData.experience}</MenuContentSpan>
          </MenuContentSpan>
        </MenuContentSpansWrapper>
        <ProfilePictureWrapper>
          {!props.isAnonymous
            ? (
              <ProfilePicture
                src={props.reviewCardData.photoUrl}
                draggable='false'
              />
            )
            : null}
        </ProfilePictureWrapper>
      </MenuContent>
    </Menu>
  </Wrapper>
);
