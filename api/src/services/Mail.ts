import { createTransport, Transporter } from 'nodemailer';

import * as generalTypes from '@typing/general';
import utils from '@utils';

import TemplatesService from './Templates';

/**
 * Tool for sending emails.
 */
export default class MailService {
  private static readonly instance: Transporter = createTransport({
    port: parseInt(process.env.MAIL_PORT as string, 10),
    secure: utils.parseBoolean(process.env.MAIL_SECURED as string),
    host: process.env.MAIL_HOST as string,
    auth: {
      user: process.env.MAIL_USERNAME as string,
      pass: process.env.MAIL_PASSWORD as string
    }
  });

  public static async sendConfirmationMail(to: string, confirmationCode: string): Promise<void> {
    const templatesPath = `${__dirname}/templates/confirmation.handlebars`;
    const replacements = { origin: process.env.ORIGIN as string, uuid: confirmationCode };
    await MailService.sendMail(to, templatesPath, replacements);
  }

  private static async sendMail(
    destination: string,
    templatesPath: string,
    replacements: generalTypes.IReplacements
  ): Promise<void> {
    const html = TemplatesService.getCompiledTemplate(templatesPath, replacements);
    const options = {
      from: process.env.MAIL_USERNAME as string,
      to: destination,
      subject: 'Подтверждение регистрации в reCheck',
      html
    };
    await MailService.instance.sendMail(options);
  }
}
