export interface ILanguageLocale {
  navbar: {
    main: string
    settings: string;
    about: string;
  },
  header: {
    jobButtons: {
      findJob: string;
      offerJob: string;
    }
    login: string;
  },
  footer: {
    cards: {
      titles: {
        advertisement: string;
        link: string;
        address: string;
      }
      content: {
        advertisment: string;
        address: string;
      }
    }
  },
  auth: {
    link: {
      main: string;
    }
    login: {
      title: string;
      input: {
        email: string;
        password: string;
      }
      checkbox: {
        remember: string;
      }
      button: {
        forgot: string;
        login: string;
        register: string;
      }
      text: {
        account: string;
      }
    }
    register: {
      title: string;
      input: {
        user: string;
        email: string;
        password1: string;
        password2: string;
      }
      checkbox: {
        agree: string;
      }
      button: {
        register: string;
        login: string;
      }
      text: {
        account: string;
      }
    }
  },
  language: {
    locale: string;
  }
  validations: {
    required: string;
    email: string;
  }
}
