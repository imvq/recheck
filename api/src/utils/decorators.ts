import { Errors } from 'typescript-rest';

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
        except?.forEach(errorType => {
          if (error instanceof errorType) throw error;
        });

        throw new Errors.InternalServerError('Inner server-side error');
      }
    };
  };
}
