import { createTransport, Transporter } from 'nodemailer';

import Utils from '@utils';

/**
 * Tool for sending emails.
 */
export default class Mailer {
  private static readonly instance: Transporter = createTransport({
    port: parseInt(process.env.MAIL_PORT as string, 10),
    secure: Utils.parseBoolean(process.env.MAIL_SECURED as string),
    host: process.env.MAIL_HOST as string,
    auth: {
      user: process.env.MAIL_USERNAME as string,
      pass: process.env.MAIL_PASSWORD as string
    }
  });

  private constructor() {}

  public static getInstance = (): Transporter => Mailer.instance;
}
