import AuthFormView from './AuthFormView.vue';
import FooterView from './FooterView.vue';
import HeaderView from './HeaderView.vue';
import LanguageSwitcherView from './LanguageSwitcherView.vue';
import MainView from './MainView.vue';
import PageView from './PageView.vue';
import ThemeSwitcherView from './ThemeSwitcherView.vue';

const components = {
  AuthFormView,
  FooterView,
  HeaderView,
  LanguageSwitcherView,
  MainView,
  PageView,
  ThemeSwitcherView,
};

export default components;

declare module 'vue' {
  interface GlobalComponents {
    AuthFormView: typeof components['AuthFormView'];
    FooterView: typeof components['FooterView'];
    HeaderView: typeof components['HeaderView'];
    LanguageSwitcherView: typeof components['LanguageSwitcherView'];
    MainView: typeof components['MainView'];
    PageView: typeof components['PageView'];
    ThemeSwitcherView: typeof components['ThemeSwitcherView'];
  }
}
