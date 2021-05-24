import { Errors } from 'typescript-rest';

import Logger from '@common/Logger';

export function dbErrorDefaultReactor({ except }: { except?: any[] } = {}) {
  return (
    _target: Object,
    _propKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;

    // eslint-disable-next-line
    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        Logger.ifdev()?.err(error.message);

        except?.forEach(errorType => {
          if (error instanceof errorType) throw error;
        });

        throw new Errors.InternalServerError('Inner server-side error');
      }
    };
  };
}
