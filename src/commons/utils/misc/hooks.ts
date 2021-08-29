import { RefObject, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A custom hook that builds on useLocation to parse the query string.
 */
export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

/**
 * A custom hook to manually blur input elements.
 */
export function useBlur(): [RefObject<HTMLInputElement>, () => void] {
  const inputReference = useRef<HTMLInputElement>(null);

  const blur = () => {
    if (inputReference.current) {
      inputReference.current.blur();
    }
  };

  return [inputReference, blur];
}
