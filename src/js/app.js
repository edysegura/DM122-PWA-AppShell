const registerServiceWorker = () => {
  // prettier-ignore
  navigator.serviceWorker
    .register("./sw.js")
    .then(() => console.log(`👁️ [app.js] SW registered`))
    .catch(() => console.log(`👁️ [app.js] SW failed to register`));
};
registerServiceWorker();

const button = document.querySelector("button");
button.addEventListener("click", async () => {
  const response = await fetch(
    `${document.location.origin}/api/generated/json`
  );
  const profileData = await response.json();
  console.log(profileData);
});
