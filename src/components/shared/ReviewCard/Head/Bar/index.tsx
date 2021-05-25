import { ReviewStatus } from 'utils/enums';
import { IProps } from './types';
import { Wrapper, MenuEntryWrapper, MenuEntry } from './styled';

/**
 * Head element of the review card.
 */
export default (props: IProps) => (
  <Wrapper status={props.reviewCardData.status} isAnonymous={props.isAnonymous}>
    {!props.isAnonymous
      ? (
        <>
          <MenuEntryWrapper>
            <MenuEntry>{props.reviewCardData.name}</MenuEntry>
          </MenuEntryWrapper>
          <MenuEntryWrapper>
            <MenuEntry>
              {(() => {
                switch (props.reviewCardData.status) {
                  case ReviewStatus.Confirmed:
                    return 'Ваш отзыв одобрен!';
                  case ReviewStatus.Rejected:
                    return 'Ваш отзыв не одобрен';
                  default:
                    return 'Ваш отзыв на модерации';
                }
              })()}
            </MenuEntry>
          </MenuEntryWrapper>
        </>
      )
      : null}
  </Wrapper>
);
