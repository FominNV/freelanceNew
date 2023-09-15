import { ILanguageLocale } from "../types";

export const rus: ILanguageLocale = {
  navbar: {
    main: 'Главная',
    settings: 'Настройки',
    about: 'О проекте',
  },
  header: {
    jobButtons: {
      findJob: 'Найти работу',
      offerJob: 'Предложить работу',
    },
  },
  footer: {
    cards: {
      titles: {
        advertisement: 'Реклама',
        link: 'Социальные сети',
        address: 'Адрес',
      },
      content: {
        advertisment: 'Платите за всю интернет-рекламу в одном окне в пару кликов. Не надо запоминать 10 паролей и каждый раз заново вводить платежные данные.',
        address: 'Россия, г.Краснодар, ул.Красная, 666',
      },
    },
  },
  auth: {
    login: {
      title: 'Вход',
      input: {
        email: 'Почта',
        password: 'Пароль',
      },
      checkbox: {
        remember: 'Запомнить меня',
      },
      button: {
        forgot: 'Забыли Пароль',
        login: 'Войти',
        register: 'Регистрация',
      },
      text: {
        account: 'Не зарегистрированы?',
      },      
    },
  },
  language: {
    locale: 'Русский',
  },
};
