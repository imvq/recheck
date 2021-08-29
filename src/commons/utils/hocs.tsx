import { ComponentType, ReactNode } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div<{ padding?: string }>`
  padding: ${props => props.padding || '0'};
`;

/**
 * Wrap component with div that has padding.
 * Is supposed to be used to separate styled component definition and paddings
 * to keep the definition pure and reusable.
 */
export function wrapped(Component: ComponentType, padding?: string) {
  return (props: { children?: ReactNode }) => (
    <Wrapper padding={padding}><Component>{props.children}</Component></Wrapper>
  );
}
