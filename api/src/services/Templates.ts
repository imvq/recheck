import fs from 'fs';
import handlebars from 'handlebars';

import { IReplacements } from '@typing';

/**
 * Service in charge of compiling Handlebars templates.
 */
export default class TemplatesService {
  /**
   * Get compiled template filling passed variables.
   */
  public static getCompiledTemplate(path: string, replacements: IReplacements)
    : string {
    return handlebars.compile<IReplacements>(fs.readFileSync(path, 'utf-8'))(replacements);
  }
}
