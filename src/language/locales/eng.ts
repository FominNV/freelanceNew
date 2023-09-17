import { ILanguageLocale } from "../types";

export const eng: ILanguageLocale = {
  navbar: {
    main: 'Main',
    settings: 'Settings',
    about: 'About',
  },
  header: {
    jobButtons: {
      findJob: 'Find job',
      offerJob: 'Offer job',
    },
    login: 'Login',
  },
  footer: {
    cards: {
      titles: {
        advertisement: 'Advertisement',
        link: 'Social Links',
        address: 'Address',
      },
      content: {
        advertisment: 'Pay for all online advertising in one window in a couple of clicks. No need to remember 10 passwords and re-enter payment information each time.',
        address: 'Russia, Krasnodar, Krasnaya st., 666',
      },
    },
  },
  auth: {
    link: {
      main: 'Main',
    },
    login: {
      title: 'Login',
      input: {
        email: 'Email',
        password: 'Password',
      },
      checkbox: {
        remember: 'Remember me',
      },
      button: {
        forgot: 'Forgot Password',
        login: 'Login',
        register: 'Register',
      },
      text: {
        account: "Don't you have account?",
      },
    },
    register: {
      title: 'Registration',
      input: {
        user: 'Username',
        email: 'Email',
        password1: 'Password',
        password2: 'Confirm Password',
      },
      checkbox: {
        agree: 'I agree to the terms and conditions',
      },
      button: {
        register: 'Register',
        login: 'Login',
      },
      text: {
        account: 'Already have an account?',
      },
    },
  },
  language: {
    locale: 'English',
  },
  validations: {
    required: 'Required field',
    email: 'Invalid email',
  },
};
