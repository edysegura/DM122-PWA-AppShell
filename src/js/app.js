const registerServiceWorker = () => {
  // prettier-ignore
  navigator.serviceWorker
    .register("./sw.js")
    .then(() => console.log(`👁️ [app.js] SW registered`))
    .catch(() => console.log(`👁️ [app.js] SW failed to register`));
};
registerServiceWorker();
