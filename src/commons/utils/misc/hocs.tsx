import { ComponentType, ReactNode } from 'react';

import mixins from 'commons/styles/mixins';

/**
 * Wrap component with div that has padding.
 * Is supposed to be used to separate styled component definition and paddings
 * to keep the definition pure and reusable.
 */
export function wrapped(Component: ComponentType, padding: string) {
  return (props: { children?: ReactNode }) => (
    <mixins.prepared.WrapperWithPadding padding={padding}>
      <Component>{props.children}</Component>
    </mixins.prepared.WrapperWithPadding>
  );
}
