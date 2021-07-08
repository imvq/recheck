import { createTransport, Transporter } from 'nodemailer';
import nodemailerMailgun from 'nodemailer-mailgun-transport';

import * as generalTypes from '@typing/general';
import utils from '@utils';

import TemplatesService from './Templates';

function getMailTransport() {
  if (process.env.NODE_ENV === 'development') {
    return createTransport({
      port: parseInt(process.env.MAIL_PORT || ''),
      secure: utils.parseBoolean(process.env.MAIL_SECURED || ''),
      host: process.env.MAIL_HOST || '',
      auth: {
        user: process.env.MAIL_USERNAME || '',
        pass: process.env.MAIL_PASSWORD || ''
      }
    });
  }

  return createTransport(nodemailerMailgun({
    auth: {
      api_key: process.env.MAIL_API_KEY || '',
      domain: process.env.MAIL_DOMAIN || ''
    }
  }));
}

/**
 * Tool for sending emails.
 */
export default class MailService {
  private static readonly instance: Transporter = getMailTransport();

  public static async sendConfirmationMail(to: string, confirmationCode: string): Promise<void> {
    const templatesPath = `${__dirname}/templates/confirmation.handlebars`;
    const replacements = { origin: process.env.ORIGIN as string, uuid: confirmationCode };
    await MailService.sendMail(to, templatesPath, replacements);
  }

  public static async sendReferralNotification(to: string, targetName: string, targetEmail: string)
    : Promise<void> {
    const templatesPath = `${__dirname}/templates/referral.handlebars`;
    const replacements = {
      origin: process.env.ORIGIN as string,
      targetName,
      targetEmail
    };
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
