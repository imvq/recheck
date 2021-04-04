import styled, { css } from 'styled-components';

import { cssVars } from 'utils/style.common';
import { ReactComponent as LogoSvg } from 'assets/images/common/LogoFull.svg';
import { ReactComponent as DetailsButtonSvg } from 'assets/images/reusables/ReviewCard/Details.svg';
import { ReactComponent as FeedbackButtonSvg } from 'assets/images/reusables/ReviewCard/Feedback.svg';

const cssVarsLocal = {
  heightTitle: '2.625em',
  marginBottomBase: '1em',
  marginTopWrapperBasic: '2.5em',
  widthWrapperPhoto: '30%'
};

const mixinsLocal = {
  ButtonAdapted: css`
    height: 2.75em;
    width: auto;
  `,
  Text: css<{
    enlarged?: boolean;
    lightened?: boolean;
  }>`
    font-size: ${props => (props.enlarged ? '1.6em' : '1em')};
    color: ${props => (props.lightened ? '#979797' : 'initial')};
  `
};

/**
 * Styled component for review card outer wrapper.
 */
export const Wrapper = styled.div`
  width: ${cssVars.widthReviewCard};
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 1.5em;
  background-color: white;
  filter: drop-shadow(.5rem .3125rem .5rem rgba(0, 0, 0, .25));
`;

/**
 * Styled component for card body.
 */
export const CardBody = styled.div`
  width: 100%;
  min-height: 25.5em;
  display: flex;
  flex-wrap: nowrap;
`;

/**
 * Styled component for photo wrapper.
 */
export const PhotoWrapper = styled.div`
  width: ${cssVarsLocal.widthWrapperPhoto};
  margin-top: ${cssVarsLocal.marginTopWrapperBasic};
  margin-left: -1em;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

/**
 * Styled component for photo.
 */
export const Photo = styled.img`
  width: 75%;
  object-fit: contain;
`;

/**
 * Styled component for text wrapper.
 */
export const TextWrapper = styled.div`
  width: calc(100% - ${cssVarsLocal.widthWrapperPhoto});
  margin-top: ${cssVarsLocal.marginTopWrapperBasic};
  padding-left: 2em;
  padding-right: 3em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

/**
 * Styled component for title wrapper.
 */
export const TitleWrapper = styled.div`
  width: 100%;
  height: 2.625em;
  margin-top: calc(-${cssVarsLocal.heightTitle} / 3.2);
  margin-bottom: 1.1em;
  display: flex;
  align-items: center;
  font-family: Open Sans;
    font-weight: 600;
`;

/**
 * Styled component for card heading.
 */
export const CardHeading = styled.h1`
  ${mixinsLocal.Text}
`;

/**
 * Styled component for card span.
 */
export const CardSpan = styled.span`
  ${mixinsLocal.Text}
`;

/**
 * Styled component for logo within the card.
 */
export const LogoWrapper = styled(LogoSvg)`
  margin-left: auto;
  width: 4em;
  height: $height-title;
`;

/**
 * Styled component for card text content.
 */
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Open Sans;
  line-height: 1.3em;
`;

/**
 * Styled component for card paragraph wrapper.
 */
export const ParagraphWrapper = styled.div<{scale?: number}>`
  margin-bottom: ${props => (
    `calc(${cssVarsLocal.marginBottomBase} * ${props.scale})`
  )};
`;

ParagraphWrapper.defaultProps = {
  scale: 1
};

/**
 * Styled component for card paragraph justification wrapper.
 */
export const ParagraphJustified = styled.div`
  text-align: justify;
  text-justify: inter-word;
`;

/**
 * Styled component for card toolbar.
 */
export const Toolbar = styled.div`
  width: 100%;
  height: 6em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 0.078vw solid #b8b8b8;
`;

/**
 * Styled component for card reviews link.
 */
export const ReviewsLink = styled.a`
  margin-right: auto;
  padding-left: 5em;
  font-family: Open Sans;
    font-weight: 600;
`;

/**
 * Styled component for card toolbar button.
 */
export const ButtonWrapper = styled.div`
  margin-right: 2.8em;

  &:last-child {
    margin-right: 4.5em;
  }
`;

/**
 * Styled component for details button.
 */
export const DetailsButtonAdapted = styled(DetailsButtonSvg)`
  ${mixinsLocal.ButtonAdapted}
`;

/**
 * Styled component for feedback button.
 */
export const FeedbackButtonSvgButtonAdapted = styled(FeedbackButtonSvg)`
  ${mixinsLocal.ButtonAdapted}
`;
