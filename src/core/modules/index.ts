const requireModules = (modules, router, store) => {
  modules.keys().forEach((fileName) => {
    const module = modules(fileName).default;
    if (module.enabled) {
      if (module.routes) {
        router.addRoutes(module.routes.routes);
        if (module.routes.beforeResolve) {
          router.beforeResolve(module.routes.beforeResolve);
        }
      }
      if (module.store) {
        store.registerModule(module.store.name, module.store.settings);
      }
    }
  });
};

export default requireModules;
