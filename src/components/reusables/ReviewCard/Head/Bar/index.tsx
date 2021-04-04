import { ReviewStatus } from 'utils/enums';
import { IProps } from './types';
import { Wrapper, MenuEntryWrapper, MenuEntry } from './styled';

/**
 * Head element of the review card.
 */
export default (props: IProps) => (
  <Wrapper status={props.reviewCardData.status}>
    <MenuEntryWrapper>
      <MenuEntry>{props.reviewCardData.name}</MenuEntry>
    </MenuEntryWrapper>
    <MenuEntryWrapper>
      <MenuEntry>
        {(() => {
          switch (props.reviewCardData.status) {
            case ReviewStatus.CONFIRMED:
              return 'Ваш отзыв одобрен!';
            case ReviewStatus.REJECTED:
              return 'Ваш отзыв не одобрен';
            default:
              return 'Ваш отзыв на модерации';
          }
        })()}
      </MenuEntry>
    </MenuEntryWrapper>
  </Wrapper>
);
