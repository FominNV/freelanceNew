import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderSlot, ssrInterpolate, ssrRenderList, renderToString } from "vue/server-renderer";
import { defineComponent, onMounted, resolveComponent, useSSRContext, createSSRApp, resolveDirective, mergeProps, ref, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, computed, createTextVNode, toDisplayString, renderSlot } from "vue";
import { useI18n, createI18n } from "vue-i18n";
import { defineStore, createPinia } from "pinia";
import { mdiYoutube, mdiGooglePlus, mdiTwitter, mdiTwitch, mdiWhiteBalanceSunny, mdiMoonWaningCrescent } from "@mdi/js";
import { useRouter } from "vue-router";
var RouteNames = /* @__PURE__ */ ((RouteNames2) => {
  RouteNames2["HOME"] = "HOME";
  RouteNames2["SETTINGS"] = "SETTINGS";
  RouteNames2["ABOUT"] = "ABOUT";
  RouteNames2["LOGIN"] = "LOGIN";
  RouteNames2["REGISTER"] = "REGISTER";
  return RouteNames2;
})(RouteNames || {});
var LanguageLocale = /* @__PURE__ */ ((LanguageLocale2) => {
  LanguageLocale2["RUS"] = "rus";
  LanguageLocale2["ENG"] = "eng";
  return LanguageLocale2;
})(LanguageLocale || {});
var LayoutTheme = /* @__PURE__ */ ((LayoutTheme2) => {
  LayoutTheme2["DARK"] = "dark";
  LayoutTheme2["LIGHT"] = "light";
  return LayoutTheme2;
})(LayoutTheme || {});
var PathNames = /* @__PURE__ */ ((PathNames2) => {
  PathNames2["Home"] = "/";
  PathNames2["Settings"] = "/settings";
  PathNames2["About"] = "/about";
  PathNames2["Login"] = "/login";
  PathNames2["Register"] = "/register";
  return PathNames2;
})(PathNames || {});
const actions = {
  setLanguage(payload) {
    this.language = payload;
  },
  setLayoutTheme(payload) {
    const body = document.querySelector("body");
    body.className = `theme--${payload}`;
    this.layoutTheme = payload;
  }
};
const getters = {
  getLanguage: (state) => {
    return state.language === LanguageLocale.ENG ? "English" : "Русский";
  }
};
const useMainStore = defineStore("main", {
  state: () => ({
    language: LanguageLocale.RUS,
    layoutTheme: LayoutTheme.DARK
  }),
  actions,
  getters
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMainStore();
    onMounted(() => {
      store.setLayoutTheme(store.layoutTheme);
    });
    useI18n({ useScope: "global" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const rus = {
  navbar: {
    main: "Главная",
    settings: "Настройки",
    about: "О проекте"
  },
  header: {
    jobButtons: {
      findJob: "Найти работу",
      offerJob: "Предложить работу"
    },
    login: "Войти"
  },
  footer: {
    cards: {
      titles: {
        advertisement: "Реклама",
        link: "Социальные сети",
        address: "Адрес"
      },
      content: {
        advertisment: "Платите за всю интернет-рекламу в одном окне в пару кликов. Не надо запоминать 10 паролей и каждый раз заново вводить платежные данные.",
        address: "Россия, г.Краснодар, ул.Красная, 666"
      }
    }
  },
  auth: {
    link: {
      main: "Главная"
    },
    login: {
      title: "Вход",
      input: {
        email: "Почта",
        password: "Пароль"
      },
      checkbox: {
        remember: "Запомнить меня"
      },
      button: {
        forgot: "Забыли Пароль",
        login: "Войти",
        register: "Регистрация"
      },
      text: {
        account: "Не зарегистрированы?"
      }
    },
    register: {
      title: "Регистрация",
      input: {
        user: "Пользователь",
        email: "Почта",
        password1: "Пароль",
        password2: "Подтверждение пароля"
      },
      checkbox: {
        agree: "Согласен с условиями пользования"
      },
      button: {
        register: "Регистрация",
        login: "Войти"
      },
      text: {
        account: "Уже зарегистрированы?"
      }
    }
  },
  language: {
    locale: "Русский"
  }
};
const eng = {
  navbar: {
    main: "Main",
    settings: "Settings",
    about: "About"
  },
  header: {
    jobButtons: {
      findJob: "Find job",
      offerJob: "Offer job"
    },
    login: "Login"
  },
  footer: {
    cards: {
      titles: {
        advertisement: "Advertisement",
        link: "Social Links",
        address: "Address"
      },
      content: {
        advertisment: "Pay for all online advertising in one window in a couple of clicks. No need to remember 10 passwords and re-enter payment information each time.",
        address: "Russia, Krasnodar, Krasnaya st., 666"
      }
    }
  },
  auth: {
    link: {
      main: "Main"
    },
    login: {
      title: "Login",
      input: {
        email: "Email",
        password: "Password"
      },
      checkbox: {
        remember: "Remember me"
      },
      button: {
        forgot: "Forgot Password",
        login: "Login",
        register: "Register"
      },
      text: {
        account: "Don't you have account?"
      }
    },
    register: {
      title: "Registration",
      input: {
        user: "Username",
        email: "Email",
        password1: "Password",
        password2: "Confirm Password"
      },
      checkbox: {
        agree: "I agree to the terms and conditions"
      },
      button: {
        register: "Register",
        login: "Login"
      },
      text: {
        account: "Already have an account?"
      }
    }
  },
  language: {
    locale: "English"
  }
};
const i18n = createI18n({
  legacy: false,
  locale: LanguageLocale.RUS,
  allowComposition: true,
  fallbackLocale: LanguageLocale.ENG,
  messages: {
    eng,
    rus
  }
});
const vuesticUi = "";
function createApp() {
  const app = createSSRApp(_sfc_main$8, {
    setup() {
      const { t } = useI18n();
      return { t };
    }
  });
  app.use(createPinia());
  app.use(i18n);
  return { app };
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AuthFormView",
  __ssrInlineRender: true,
  props: {
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ui_link = resolveComponent("ui-link");
      const _component_language_switcher_view = resolveComponent("language-switcher-view");
      const _component_ui_title = resolveComponent("ui-title");
      const _directive_ui_typo = resolveDirective("ui-typo");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-view" }, _attrs))}><div class="auth-view__content"><div class="auth-view__panel">`);
      _push(ssrRenderComponent(_component_ui_link, {
        to: "/",
        size: "md",
        routerLink: "",
        text: _ctx.$t("auth.link.main")
      }, null, _parent));
      _push(ssrRenderComponent(_component_language_switcher_view, { size: "xs" }, null, _parent));
      _push(`</div>`);
      if (_ctx.title) {
        _push(ssrRenderComponent(_component_ui_title, mergeProps({
          level: "1",
          text: _ctx.title
        }, ssrGetDirectiveProps(_ctx, _directive_ui_typo, { type: "title", size: "sm" })), null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="auth-view__body"><form class="auth-view__form">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</form>`);
      if (_ctx.$slots.action1) {
        _push(`<div class="auth-view__action1">`);
        ssrRenderSlot(_ctx.$slots, "action1", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$slots.action2) {
        _push(`<div class="auth-view__action2">`);
        ssrRenderSlot(_ctx.$slots, "action2", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$slots.action3) {
        _push(`<div class="auth-view__action3">`);
        ssrRenderSlot(_ctx.$slots, "action3", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const AuthFormView_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/components/AuthFormView.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const FooterCardItems = [
  {
    title: "footer.cards.titles.advertisement"
  },
  {
    title: "footer.cards.titles.link"
  },
  {
    title: "footer.cards.titles.address"
  }
];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FooterContent",
  __ssrInlineRender: true,
  props: {
    index: {}
  },
  setup(__props) {
    const links = ref([mdiYoutube, mdiGooglePlus, mdiTwitter, mdiTwitch]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ui_link = resolveComponent("ui-link");
      const _component_svg_icon = resolveComponent("svg-icon");
      if (_ctx.index !== void 0) {
        _push(`<!--[-->`);
        if (_ctx.index === 0) {
          _push(`<div class="footer-content__text">${ssrInterpolate(_ctx.$t("footer.cards.content.advertisment"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.index === 1) {
          _push(`<div class="footer-content__links"><!--[-->`);
          ssrRenderList(links.value, (item, i) => {
            _push(ssrRenderComponent(_component_ui_link, {
              class: "footer-content__link",
              key: i
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_svg_icon, {
                    type: "mdi",
                    path: item,
                    size: "48"
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_svg_icon, {
                      type: "mdi",
                      path: item,
                      size: "48"
                    }, null, 8, ["path"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.index === 2) {
          _push(`<div class="footer-content__text">${ssrInterpolate(_ctx.$t("footer.cards.content.address"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const FooterContent_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/content/FooterContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FooterView",
  __ssrInlineRender: true,
  setup(__props) {
    const cardItems = ref(FooterCardItems);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ui_container = resolveComponent("ui-container");
      const _component_ui_card = resolveComponent("ui-card");
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-view" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ui_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="footer-view__content"${_scopeId}><!--[-->`);
            ssrRenderList(cardItems.value, (item, i) => {
              _push2(`<div class="footer-view__card-wrap"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ui_card, {
                title: _ctx.$t(item.title),
                "title-color": "white",
                "body-color": "white",
                titleBorder: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$6), { index: i }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$6), { index: i }, null, 8, ["index"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "footer-view__content" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(cardItems.value, (item, i) => {
                  return openBlock(), createBlock("div", {
                    class: "footer-view__card-wrap",
                    key: item.title
                  }, [
                    createVNode(_component_ui_card, {
                      title: _ctx.$t(item.title),
                      "title-color": "white",
                      "body-color": "white",
                      titleBorder: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$6), { index: i }, null, 8, ["index"])
                      ]),
                      _: 2
                    }, 1032, ["title"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer>`);
    };
  }
});
const FooterView_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/components/FooterView.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const createGuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & (3 | 8);
    return v.toString(16);
  });
};
const HeaderNavbarItems = [
  {
    id: createGuid(),
    path: PathNames.Home,
    tname: "navbar.main"
  },
  {
    id: createGuid(),
    path: PathNames.Settings,
    tname: "navbar.settings"
  },
  {
    id: createGuid(),
    path: PathNames.About,
    tname: "navbar.about"
  }
];
const HeaderJobButtons = [
  {
    tname: "header.jobButtons.findJob",
    theme: "secondary"
  },
  {
    tname: "header.jobButtons.offerJob",
    theme: "action"
  }
];
const LanguageSwitcherDropdownItems = [
  {
    locale: LanguageLocale.ENG,
    title: "English"
  },
  {
    locale: LanguageLocale.RUS,
    title: "Русский"
  }
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitcherView",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const darkTheme = LayoutTheme.DARK;
    const lightTheme = LayoutTheme.LIGHT;
    const theme = computed(() => mainStore.layoutTheme);
    const lightIconClassName = computed(() => [
      "theme-switcher-view__icon",
      { "theme-switcher-view__icon--active": theme.value === LayoutTheme.LIGHT }
    ]);
    const darkIconClassName = computed(() => [
      "theme-switcher-view__icon",
      { "theme-switcher-view__icon--active": theme.value === LayoutTheme.DARK }
    ]);
    function changeTheme(value) {
      mainStore.setLayoutTheme(value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svg_icon = resolveComponent("svg-icon");
      const _component_ui_switch = resolveComponent("ui-switch");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "theme-switcher-view" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_svg_icon, {
        class: lightIconClassName.value,
        type: "mdi",
        path: unref(mdiWhiteBalanceSunny),
        size: "24"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ui_switch, {
        value: theme.value,
        falseValue: unref(lightTheme),
        trueValue: unref(darkTheme),
        onChange: changeTheme
      }, null, _parent));
      _push(ssrRenderComponent(_component_svg_icon, {
        class: darkIconClassName.value,
        type: "mdi",
        path: unref(mdiMoonWaningCrescent),
        size: "24"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const ThemeSwitcherView_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/components/ThemeSwitcherView.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcherView",
  __ssrInlineRender: true,
  props: {
    size: { default: "md" }
  },
  setup(__props) {
    const mainStore = useMainStore();
    const dropdownItems = ref(LanguageSwitcherDropdownItems);
    function setLanguage($i18n, lang) {
      $i18n.locale = lang;
      mainStore.setLanguage(lang);
    }
    function toggleLanguage($i18n) {
      $i18n.locale = $i18n.locale === LanguageLocale.ENG ? LanguageLocale.RUS : LanguageLocale.ENG;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ui_dropdown = resolveComponent("ui-dropdown");
      const _component_ui_button = resolveComponent("ui-button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "language-switcher-view" }, _attrs))}>`);
      if (_ctx.size === "md") {
        _push(ssrRenderComponent(_component_ui_dropdown, {
          title: _ctx.$t("language.locale")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(dropdownItems.value, (item) => {
                _push2(ssrRenderComponent(_component_ui_button, {
                  key: item.locale,
                  theme: "primary",
                  onClick: ($event) => setLanguage(_ctx.$i18n, item.locale)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.title)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(dropdownItems.value, (item) => {
                  return openBlock(), createBlock(_component_ui_button, {
                    key: item.locale,
                    theme: "primary",
                    onClick: ($event) => setLanguage(_ctx.$i18n, item.locale)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.title), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.size === "sm") {
        _push(ssrRenderComponent(_component_ui_dropdown, {
          title: _ctx.$i18n.locale,
          size: _ctx.size
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(dropdownItems.value, (item) => {
                _push2(ssrRenderComponent(_component_ui_button, {
                  key: item.locale,
                  p0: "",
                  onClick: ($event) => setLanguage(_ctx.$i18n, item.locale)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.locale)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.locale), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(dropdownItems.value, (item) => {
                  return openBlock(), createBlock(_component_ui_button, {
                    key: item.locale,
                    p0: "",
                    onClick: ($event) => setLanguage(_ctx.$i18n, item.locale)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.locale), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.size === "xs") {
        _push(ssrRenderComponent(_component_ui_button, {
          p0: "",
          text: _ctx.$i18n.locale.toUpperCase(),
          onClick: ($event) => toggleLanguage(_ctx.$i18n)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/components/LanguageSwitcherView.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeaderView",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const navbarItems = ref(HeaderNavbarItems);
    const jobButtons = ref(HeaderJobButtons);
    function redirectToLogin() {
      router.push({
        name: RouteNames.LOGIN
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ui_container = resolveComponent("ui-container");
      const _component_ui_text_animater = resolveComponent("ui-text-animater");
      const _component_ui_button = resolveComponent("ui-button");
      const _component_ui_navbar = resolveComponent("ui-navbar");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-view" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ui_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="header-view__content"${_scopeId}><div class="header-view__lobby"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ui_text_animater, { text: "Get it" }, null, _parent2, _scopeId));
            _push2(`<div class="header-view__job-buttons"${_scopeId}><!--[-->`);
            ssrRenderList(jobButtons.value, (item) => {
              _push2(ssrRenderComponent(_component_ui_button, {
                key: item.tname,
                theme: item.theme,
                shadow: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.$t(item.tname))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.$t(item.tname)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div>`);
            _push2(ssrRenderComponent(_component_ui_navbar, { items: navbarItems.value }, null, _parent2, _scopeId));
            _push2(`<div class="header-view__settings"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ui_button, {
              text: _ctx.$t("header.login"),
              theme: "primary",
              onClick: redirectToLogin
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "header-view__content" }, [
                createVNode("div", { class: "header-view__lobby" }, [
                  createVNode(_component_ui_text_animater, { text: "Get it" }),
                  createVNode("div", { class: "header-view__job-buttons" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(jobButtons.value, (item) => {
                      return openBlock(), createBlock(_component_ui_button, {
                        key: item.tname,
                        theme: item.theme,
                        shadow: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.$t(item.tname)), 1)
                        ]),
                        _: 2
                      }, 1032, ["theme"]);
                    }), 128))
                  ])
                ]),
                createVNode(_component_ui_navbar, { items: navbarItems.value }, null, 8, ["items"]),
                createVNode("div", { class: "header-view__settings" }, [
                  createVNode(_sfc_main$4),
                  createVNode(_sfc_main$3),
                  createVNode(_component_ui_button, {
                    text: _ctx.$t("header.login"),
                    theme: "primary",
                    onClick: redirectToLogin
                  }, null, 8, ["text"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
});
const HeaderView_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/components/HeaderView.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ui_container = resolveComponent("ui-container");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main-view" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ui_container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</main>`);
}
const MainView_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/components/MainView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MainView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageView",
  __ssrInlineRender: true,
  props: {
    layout: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_layout_switcher = resolveComponent("layout-switcher");
      _push(ssrRenderComponent(_component_layout_switcher, mergeProps({ layout: _ctx.layout }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/components/PageView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const components = {
  AuthFormView: _sfc_main$7,
  FooterView: _sfc_main$5,
  HeaderView: _sfc_main$2,
  LanguageSwitcherView: _sfc_main$3,
  MainView,
  PageView: _sfc_main,
  ThemeSwitcherView: _sfc_main$4
};
class Views {
  static install(vue) {
    Object.entries(components).forEach(([name, component]) => {
      vue.component(name, component);
    });
    if (components) {
      Object.keys(components).forEach((key) => {
        const data = components[key];
        const dataType = typeof data.render === "function" || typeof data === "function" ? "component" : "directives";
        if (dataType === "component") {
          vue.component(key, data);
          return;
        }
      });
      return true;
    }
    return false;
  }
}
async function render() {
  const { app } = createApp();
  Views.install(app);
  const ctx = {};
  const html = await renderToString(app, ctx);
  return { html };
}
export {
  render
};
