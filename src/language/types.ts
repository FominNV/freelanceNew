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
  },
  language: {
    locale: string;
  }
}
