import { ITextAreaEvent } from 'commons/types/general';

export function textAreaHandler(event: ITextAreaEvent, setter: (value: string) => void) {
  setter(event.target.value);
}
