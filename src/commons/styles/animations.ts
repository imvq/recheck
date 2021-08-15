import { keyframes } from 'styled-components';

/**
 * Encapsulation for reusable CSS animations.
 */
export default {
  fadeDefault: keyframes`
    0% {
      transform: scale(.9);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  `,
  slideIn: keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  `
};
