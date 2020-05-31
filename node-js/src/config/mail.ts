interface IMailConfig {
  driver: 'ethereal' | 'mailgun';

  defaults: {
    from: {
      email: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'equipe@gobarber.com',
    },
  },
} as IMailConfig;
