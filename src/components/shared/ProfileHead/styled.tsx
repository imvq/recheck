import styled from 'styled-components';

import cssVars from 'commons/styles/cssVars';

export const Wrapper = styled.div`
  grid-area: MenuWrapper;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuBarWrapper = styled.div<{ backgroundColor?: string; }>`
  background-color: ${props => props.backgroundColor || '#f0f3ff'};
  font-size: 1.3rem;
  padding: 1rem 0 0 ${cssVars.profilePhotoWrapperWidth};
`;

export const MenuContentTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  line-height: 4rem;
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

export const MenuContent = styled.div<{ backgroundColor?: string; }>`
  min-height: 8rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.backgroundColor || 'white'};
  padding: 1rem 0 2rem calc(${cssVars.profilePhotoWrapperWidth});
`;

export const MenuContentSpan = styled.span<{ isDimmed?: boolean; }>`
  font-size: 1.3rem;
  font-weight: ${props => (props.isDimmed ? '500' : '600')};
  line-height: 2rem;
  color: ${props => (props.isDimmed ? '#979797' : 'black')};
`;

export const ProfilePictureWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${cssVars.profilePhotoWrapperWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilePicture = styled.img`
  object-fit: cover;
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 4rem;
  bottom: 2rem;
`;
