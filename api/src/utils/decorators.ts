import { Errors } from 'typescript-rest';

import ILogger from '@logging/ILogger';

export function dbErrorDefaultReactor(
  { except, logger }: { except?: any[], logger?: ILogger } = {}
) {
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
        except?.forEach(errorType => {
          if (error instanceof errorType) throw error;
        });

        logger?.err(error);

        throw new Errors.InternalServerError('Inner server-side error');
      }
    };
  };
}
