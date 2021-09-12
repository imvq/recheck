import AbortController from 'node-abort-controller';
import fs from 'fs';
import handlebars from 'handlebars';
import nodemailerMailgun from 'nodemailer-mailgun-transport';

import { createTransport, Transporter } from 'nodemailer';

import { IReplacements } from '@typing';

/*
 * Node.js doesn't have AbortController by default,
 * and when the request library used by mailgun.js (ky-universal) sees that,
 * it tries to polyfill it using abort-controller. This module will NOT work
 * in a Node.js environment, so we have to polyfill it ourselves using node-abort-controller.
 * https://github.com/mailgun/mailgun-js/issues/101
 */
global.AbortController = AbortController;

const mailTransporter: Transporter = getMailTransport();

function getCompiledTemplate(path: string, replacements: IReplacements) {
  return handlebars.compile<IReplacements>(fs.readFileSync(path, 'utf-8'))(replacements);
}

function getMailTransportDev() {
  const { MAIL_PORT, MAIL_SECURED, MAIL_HOST, MAIL_USERNAME, MAIL_PASSWORD } = process.env;

  return createTransport({
    port: parseInt(MAIL_PORT || '0'),
    secure: MAIL_SECURED === 'true',
    host: MAIL_HOST || '',
    auth: { user: MAIL_USERNAME || '', pass: MAIL_PASSWORD || '' }
  });
}

function getMailTransportProd() {
  const { MAIL_API_KEY, MAIL_DOMAIN } = process.env;

  return createTransport(nodemailerMailgun({
    auth: { apiKey: MAIL_API_KEY || '', domain: MAIL_DOMAIN || '' },
    host: 'api.eu.mailgun.net'
  }));
}

function getMailTransport() {
  return process.env.NODE_ENV === 'development' ? getMailTransportDev() : getMailTransportProd();
}

export async function sendConfirmationMail(to: string, confirmationCode: string) {
  const templatesPath = `${__dirname}/templates/confirmation.handlebars`;
  const replacements = { origin: process.env.ORIGIN as string, uuid: confirmationCode };
  try {
    await sendMail(to, templatesPath, replacements);
  } catch (error) {
    console.log(error);
  }
}

export async function sendNotification(to: string, targetName: string, targetEmail: string) {
  const templatesPath = `${__dirname}/templates/referral.handlebars`;
  const replacements = {
    origin: process.env.ORIGIN as string,
    targetName,
    targetEmail
  };

  await sendMail(to, templatesPath, replacements);
}

async function sendMail(destination: string, templatesPath: string, replacements: IReplacements) {
  const html = getCompiledTemplate(templatesPath, replacements);
  const options = {
    from: process.env.MAIL_USERNAME as string,
    to: destination,
    subject: 'Подтверждение регистрации в reCheck',
    html
  };

  await mailTransporter.sendMail(options);
}
