import { createTransport, Transporter } from 'nodemailer';
import nodemailerMailgun from 'nodemailer-mailgun-transport';

import * as generalTypes from '@typing/general';
import utils from '@utils';

import AbortController from 'node-abort-controller';
import TemplatesService from './Templates';

/*
 * Node.js doesn't have AbortController by default,
 * and when the request library used by mailgun.js (ky-universal) sees that,
 * it tries to polyfill it using abort-controller. This module will NOT work
 * in a Node.js environment, so we have to polyfill it ourselves using node-abort-controller.
 * https://github.com/mailgun/mailgun-js/issues/101
 */
global.AbortController = AbortController;

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
      apiKey: process.env.MAIL_API_KEY || '',
      domain: process.env.MAIL_DOMAIN || '',
    },
    host: 'api.eu.mailgun.net'
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
    try {
      await MailService.sendMail(to, templatesPath, replacements);
    } catch (error) {
      console.log(error);
    }
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
