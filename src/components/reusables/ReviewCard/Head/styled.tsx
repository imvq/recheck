import styled from 'styled-components';

const cssVarsLocal = {
  photoWrapperWidth: '12rem'
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Open Sans;
  border-bottom: 1px solid #c2c0c0;
`;

export const Menu = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: calc(${cssVarsLocal.photoWrapperWidth} + 2rem);
  padding-bottom: 2rem;
`;

export const MenuContentSpansWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const MenuContentSpan = styled.span<{ dimmed?: boolean; }>`
  font-size: 1.3rem;
  line-height: 2rem;
  color: ${props => (props.dimmed ? '#979797' : 'black')};
`;

export const ProfilePictureWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${cssVarsLocal.photoWrapperWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilePicture = styled.img`
  position: absolute;
  right: 0;
  object-fit: cover;
  height: 50%;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;
