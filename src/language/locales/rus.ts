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
    login: 'Войти',
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
    link: {
      main: 'Главная',
    },
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
    register: {
      title: 'Регистрация',
      input: {
        user: 'Пользователь',
        email: 'Почта',
        password1: 'Пароль',
        password2: 'Подтверждение пароля',
      },
      checkbox: {
        agree: 'Согласен с условиями пользования',
      },
      button: {
        register: 'Регистрация',
        login: 'Войти',
      },
      text: {
        account: 'Уже зарегистрированы?',
      },
    },
  },
  language: {
    locale: 'Русский',
  },
};
