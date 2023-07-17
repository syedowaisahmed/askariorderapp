import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_USER, SMTP_PASSWORD, SMTP_PORT } from '../config.js';

export const emailer = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

export const createEmail = (from, to, subject, text) => {
  return {
    from,
    to,
    subject,
    text
  };
};