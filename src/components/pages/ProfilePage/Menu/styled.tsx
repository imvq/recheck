import styled from 'styled-components';

const cssVarsLocal = {
  photoWrapperWidth: '20rem'
};

export const Wrapper = styled.div`
  grid-area: MenuWrapper;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 70rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  filter: drop-shadow(.2rem .2rem .5rem rgba(0, 0, 0, .2));
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-left: calc(${cssVarsLocal.photoWrapperWidth} + 2rem);
  padding-bottom: 2rem;
`;

export const MenuContentTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  line-height: 4rem;
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
  object-fit: cover;
  height: 80%;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;
