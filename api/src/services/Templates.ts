import fs from 'fs';
import handlebars from 'handlebars';

import * as generalTypes from '@typing/general';

/**
 * Service in charge of compiling Handlebars templates.
 */
export default class TemplatesService {
  /**
   * Get compiled template filling passed variables.
   */
  public static getCompiledTemplate(path: string, replacements: generalTypes.IReplacements)
    : string {
    return handlebars.compile<generalTypes.IReplacements>(fs.readFileSync(path, 'utf-8'))(replacements);
  }
}
